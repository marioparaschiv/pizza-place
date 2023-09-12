import { Button, FormControl, MenuItem, Select, Modal, Box, IconButton, Divider, Tooltip, Card, Typography, Snackbar, Slide, Alert, SlideProps } from '@mui/material';
import { Close } from '@mui/icons-material';
import Product from '~/components/product';
import * as Constants from '~/constants';
import { useCartStore } from '~/stores';
import { useState } from 'react';
import { cn, round } from '~/util';
import './pizzas.scss';

function SlideOut(props: SlideProps) {
	return <Slide {...props} direction='up' />;
}

function Pizzas() {
	const [toppings, setToppings] = useState<Record<string, string[]>>({});
	const [modals, setModals] = useState<Record<string, boolean>>({});
	const [crusts, setCrusts] = useState<Record<string, string>>({});
	const [successAlert, setSuccessAlert] = useState({ open: false });
	const [sizes, setSizes] = useState<Record<string, number>>({});
	const cart = useCartStore();

	return <section className='pizzas'>
		<Snackbar
			TransitionComponent={SlideOut}
			open={successAlert.open}
			onChange={console.log}
			autoHideDuration={2000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			onClose={() => setSuccessAlert({ open: false })}
		// key={'slide'}
		>
			<Alert onClose={() => setSuccessAlert({ open: false })} severity='success' sx={{ width: '100%' }}>
				Added to cart
			</Alert>
		</Snackbar>
		{Constants.Pizzas.map((pizza, index) => {
			const size = pizza.sizes[sizes[pizza.name] ?? pizza.sizes.length - 1];
			const tops = toppings[pizza.name] ?? pizza.toppings;
			const crustName = crusts[pizza.name];
			const crust = crustName ? (Constants.Crusts as any)[crustName] as { calories: number, price: number; } : Constants.Crusts.Traditional;

			const props = {
				...pizza,
				calories: size.calories + (crust?.calories ?? 0),
				price: size.price + (crust?.price ?? 0) + (tops.length > pizza.toppings.length ? 0.50 * (tops.length - pizza.toppings.length) : 0),
				onBasketAdd: () => {
					setSuccessAlert({ open: true });

					if (successAlert) {
						setTimeout(() => setSuccessAlert({ open: true }), 500);
					} else {
						setSuccessAlert({ open: true });
					}
				},
				serves: size.serves,
				toppings: tops,
				key: index,
				crust,
				size,
			};

			return <Product {...props}>
				<Modal
					key={pizza.name}
					open={modals[pizza.name] ?? false}
					onClose={() => setModals(previous => ({ ...previous, [pizza.name]: false }))}
				>
					<Box className='pizza-modal'>
						<Box className='pizza-modal-header'>
							Customize Pizza
							<Tooltip title='Close'>
								<IconButton
									className='pizza-modal-header-close'
									onClick={() => setModals(previous => ({ ...previous, [pizza.name]: false }))}
								>
									<Close />
								</IconButton>
							</Tooltip>
						</Box>
						<Divider className='pizza-modal-divider' />
						<Box className='pizza-modal-body'>
							<Box display='flex' alignItems='center' justifyContent='center'>
								<Product {...props} isCart={true} elevation={1} className='pizza-modal-product' />
							</Box>
							<div className='pizza-size-picker'>
								<Typography className='pizza-modal-title'>Size</Typography>
								{pizza.sizes.map((size) => <Card
									className='pizza-size-card'
									elevation={1}
									onClick={() => setSizes(prev => ({ ...prev, [pizza.name]: pizza.sizes.indexOf(size as any) }))}
									data-is-selected={(sizes[pizza.name] ?? pizza.sizes.length - 1) === pizza.sizes.indexOf(size as any)}
									key={cn('sizes', size.name, pizza.name, index)}
								>
									{size.name} ({size.inches}")
								</Card>)}
							</div>
							<div className='pizza-crust-picker'>
								<Typography className='pizza-modal-title' fontSize='2rem' fontWeight={600}>Crust</Typography>
								{Object.entries(Constants.Crusts).map(([name, details]) => <Card
									elevation={1}
									className='pizza-crust-card'
									onClick={() => setCrusts(prev => ({ ...prev, [pizza.name]: name }))}
									data-is-selected={(crusts[pizza.name] ?? 'Traditional') === name}
									key={cn('crust', name, pizza.name, index)}
								>
									{name} Crust {details.price > 0 ? <b>(+£{details.price})</b> : ''}
								</Card>)}
							</div>
							<div className='pizza-crust-picker'>
								<Typography fontSize='2rem' fontWeight={600}>Toppings {pizza.toppings.length ? `(${pizza.toppings.length} allowed)` : ''}</Typography>
								{Object.entries(Constants.Toppings).map(([name, details]) => <Card
									className='pizza-topping-card'
									elevation={1}
									key={cn('toppings', name, pizza.name, index)}
									onClick={() => setToppings(prev => {
										const toppings = [...prev[pizza.name] ?? pizza.toppings];

										if (toppings.includes(name)) {
											const idx = toppings.indexOf(name);
											if (idx > -1) toppings.splice(idx, 1);
										} else {
											toppings.push(name);
										}

										return ({ ...prev, [pizza.name]: toppings });
									})}
									data-is-selected={tops.includes(name)}
								>
									{name} ({details.calories} kcal) {(tops.length >= pizza.toppings.length && (!tops.includes(name) || tops.slice(pizza.toppings.length).includes(name))) && <b>(+£0.50)</b>}
								</Card>)}
							</div>
						</Box>
						<Box className='pizza-modal-footer'>
							<Button
								className='pizza-modal-footer-add-to-cart'
								variant='contained'
								disabled={cart.items.length >= 10}
								onClick={() => {
									cart.add(props);
									setModals(prev => ({ ...prev, [pizza.name]: false }));
									setSuccessAlert({ open: true });


									if (successAlert) {
										setTimeout(() => setSuccessAlert({ open: true }), 500);
									} else {
										setSuccessAlert({ open: true });
									}
								}}
							>
								Add to cart £{round(size.price + (crust?.price ?? 0) + (tops.length > pizza.toppings.length ? 0.50 * (tops.length - pizza.toppings.length) : 0))}
							</Button>
						</Box>
					</Box>
				</Modal>
				<FormControl fullWidth key={'sizes-' + pizza.name + index} style={{ marginBottom: '1rem' }}>
					<Select
						value={pizza.sizes.indexOf(size as any)}
						variant='outlined'
						onChange={(e) => setSizes(prev => ({ ...prev, [pizza.name]: e.target.value as unknown as number }))}
						defaultValue={pizza.sizes.indexOf(size as any)}
						key={'sizes-' + pizza.name + index}
					>
						{pizza.sizes.map((size, index) => <MenuItem value={index} key={'sizes-' + pizza.name + index}>
							{size.name} ({size.inches}")
						</MenuItem>)}
					</Select>
				</FormControl>
				<Button onClick={() => setModals(previous => ({ ...previous, [pizza.name]: true }))}>
					Customize
				</Button>
			</Product>;
		})}
	</section >;
}

export { Pizzas as Component };
export const path = '/pizzas';