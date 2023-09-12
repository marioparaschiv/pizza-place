import { round, uuid } from '~/util';
import { create } from 'zustand';

interface CartItem {
	name: string;
	price: number;
	image: string;
	toppings?: string[];
	calories: number;
	serves: number;
	crust?: any;
	size?: any;
}

interface InternalCartItem extends CartItem {
	id: string;
}

interface Cart {
	items: InternalCartItem[];
	price: string;
	add: (item: CartItem) => void;
	remove: (id: string) => void;
}

const store = create<Cart>((set, get) => ({
	items: [],
	price: '0',
	add: (item: CartItem) => {
		const old = get().items;
		const items = [...old, { ...item, id: uuid() }];
		const price = round(items.reduce((prev, curr) => prev + curr.price, 0));

		set({ items, price });
	},
	remove: (id: string) => {
		const items = get().items;
		const idx = items.findIndex(i => i.id === id);
		if (idx === -1) return;

		items.splice(idx, 1);
		const price = round(items.reduce((prev, curr) => prev + curr.price, 0));


		set({ items, price });
	}
}));

export default store;