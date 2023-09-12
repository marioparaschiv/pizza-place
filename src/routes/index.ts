export * as Pizzas from './pizzas';
export * as drinks from './drinks';
export * as Sides from './sides';
export * as Cart from './cart';

export type Route = {
	[key: string]: {
		Component: React.FC,
		path: string;
	};
};