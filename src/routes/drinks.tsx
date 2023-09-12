import Product from '~/components/product';
import * as Constants from '~/constants';
import './drinks.scss';

function Drinks() {
	return <section className='drinks'>
		{Constants.Drinks.map((side, index) => {
			return <Product
				{...side}
				calories={side.calories}
				serves={side.serves}
				price={side.price}
				key={index}
			/>;
		})}
	</section>;
}

export { Drinks as Component };
export const path = '/drinks';