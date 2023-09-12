import { Cookie, DarkMode, LightMode, LocalDrink, LocalPizza, ShoppingCart } from '@mui/icons-material';
import { Tooltip, IconButton, useColorScheme, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '~/stores';
import './header.scss';

function Header() {
	const scheme = useColorScheme();
	const navigate = useNavigate();
	const cart = useCartStore();

	return <nav className='header'>
		<Button
			className='header-nav-button'
			onClick={() => navigate('/pizzas')}
			startIcon={<LocalPizza />}
			color='inherit'
		>
			Pizzas
		</Button>
		<Button
			className='header-nav-button'
			onClick={() => navigate('/sides')}
			startIcon={<Cookie />}
			color='inherit'
		>
			Sides
		</Button>
		<Button
			className='header-nav-button'
			onClick={() => navigate('/drinks')}
			startIcon={<LocalDrink />}
			color='inherit'
		>
			Drinks
		</Button>
		<Tooltip title={scheme.mode === 'light' ? 'Dark Mode' : 'Light Mode'}>
			<IconButton id='theme-switcher' onClick={() => scheme.setMode(scheme.mode === 'light' ? 'dark' : 'light')}>
				{scheme.mode === 'light' ? <DarkMode /> : <LightMode />}
			</IconButton>
		</Tooltip>
		<Tooltip title='Cart'>
			<Button
				className='header-nav-button'
				id='cart'
				color='inherit'
				onClick={() => navigate('/cart')}
				startIcon={<ShoppingCart />}
			>
				Cart {cart.price !== '0' && `(£${cart.price.toLocaleString()})`}
			</Button>
		</Tooltip>
	</nav>;
}

export default Header;