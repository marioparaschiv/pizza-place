import { Alert, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, Slide, SlideProps, Snackbar, TextField, Typography } from '@mui/material';
import { RemoveShoppingCart } from '@mui/icons-material';
import { useCartStore } from '~/stores';
import { Product } from '~/components';
import { useState } from 'react';
import { round } from '~/util';
import './cart.scss';

function SlideOut(props: SlideProps) {
	return <Slide {...props} direction='up' />;
}

function Cart() {
	const [successAlert, setSuccessAlert] = useState<boolean>(false);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [table, setTable] = useState('');
	const store = useCartStore();

	return <>
		<Snackbar
			TransitionComponent={SlideOut}
			open={successAlert}
			onChange={console.log}
			autoHideDuration={2000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			onClose={() => setSuccessAlert(false)}
		>
			<Alert onClose={() => setSuccessAlert(false)} severity='success' sx={{ width: '100%' }}>
				Removed from cart
			</Alert>
		</Snackbar>
		{!store.items.length && <div className='cart-no-items'>
			<RemoveShoppingCart className='cart-no-items-icon' />
			<span>You have no items in your cart.</span>
		</div>}
		{store.items.length > 0 && <div className='cart-items'>
			{store.items.map((item, index) => {
				return <Product
					{...item}
					key={index}
					isCart={true}
				>
					<div className='product-card-details'>
						<Typography>
							{`${item.size ? item.size.name + ' - ' : ''} £${round(item.price)}`.trim()}
						</Typography>
						{item.crust && <Typography>
							{item.crust.name} Crust
						</Typography>}
						{item.toppings?.length ? <Typography className='product-card-toppings'>
							{item.toppings.join(', ')}
						</Typography> : ''}
					</div>
					<div className='product-card-footer'>
						<Button
							className='product-card-footer-remove'
							startIcon={<RemoveShoppingCart />}
							onClick={() => {
								store.remove(item.id);
								setSuccessAlert(false);

								if (successAlert) {
									setTimeout(() => setSuccessAlert(true), 500);
								} else {
									setSuccessAlert(true);
								}
							}}
						>
							Remove from cart
						</Button>
					</div>
				</Product>;
			})}
		</div>}
		{store.items.length > 0 && <Card className='cart-footer' elevation={5}>
			<span className='cart-footer-price'>
				Total: £{store.price}
			</span>
			<TextField
				type='text'
				className='cart-footer-special-request'
				label='Special Request'
				variant='outlined'
			/>
			<FormControl>
				<TextField
					type='text'
					className='cart-footer-table-number'
					error={table ? (Number(table) > 25 || Number(table) < 1) : false}
					onChange={e => {
						if (!e.target.value) return setTable('');
						const value = Number(e.target.value);
						if (Number.isNaN(value)) return;

						setTable(e.target.value);
					}}
					label='Table Number'
					variant='outlined'
					value={table}
					required
				/>
				{table && (Number(table) > 25 || Number(table) < 1) && <FormHelperText className='cart-footer-table-number-error'>
					Table number must be 1-25
				</FormHelperText>}
			</FormControl>
			<Dialog className='card-modal' open={modalOpen}>
				<DialogTitle>
					To be continued.
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						This functionality will be added later, this is currently a prototype.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setModalOpen(false)} autoFocus>
						Okay
					</Button>
				</DialogActions>
			</Dialog>
			<Button
				className='cart-footer-payment'
				disabled={!table || Number(table) > 25 || Number(table) < 1}
				onClick={() => setModalOpen(true)}
			>
				Proceed to payment
			</Button>
		</Card>}
	</>;
}

export { Cart as Component };
export const path = '/cart';