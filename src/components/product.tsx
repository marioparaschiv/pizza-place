import { Button, Card } from '@mui/material';
import { useCartStore } from '~/stores';
import React from 'react';
import './product.scss';
import { round } from '~/util';

interface ProductProps extends React.PropsWithChildren {
	name: string;
	image: string;
	price: number;
	calories: number;
	serves: number;
	elevation?: number;
	toppings?: string[];
	onBasketAdd?: (...args: any) => any;
	isCart?: boolean;
	crust?: any;
	size?: any;

	[key: string]: any;
}

function Product(props: ProductProps) {
	const cart = useCartStore();

	return <Card className={'product-card'} elevation={props.elevation ?? 10}>
		<div className='product-header'>
			<img className='product-image' src={props.image} />
		</div>
		<div className='product-body'>
			<span className='product-name'>{props.name}</span>
			<span className='product-details'>
				{props.calories} kcal | Serves {props.serves}
			</span>
		</div>
		{props.children}
		{!props.isCart && <Button
			className='product-add-to-cart'
			variant='contained'
			disabled={cart.items.length >= 10}
			onClick={() => {
				cart.add(props);
				props.onBasketAdd?.();
			}}
		>
			Add to cart (£{round(props.price)})
		</Button>}
	</Card>;
}

export default Product;