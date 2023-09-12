import Product from '~/components/product';
import * as Constants from '~/constants';
import './sides.scss';

function Sides() {
	return <section className='sides'>
		{Constants.Sides.map((side, index) => {
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

export { Sides as Component };
export const path = '/sides';