export const Pizzas = [
	{
		name: 'Cheese and Tomato',
		image: 'img/pizzas/margherita.png',
		toppings: [],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 12.99,
				calories: 909,
				serves: 1
			},
			{
				name: 'Medium',
				price: 14.99,
				calories: 1614,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 19.99,
				inches: 13.5,
				calories: 2171,
				serves: 3
			}
		]
	},
	{
		name: 'Meat Feast',
		image: 'img/pizzas/meat-feast.png',
		toppings: ['Pork Meatballs', 'Ground Beef', 'Sausage', 'Pepperoni', 'Bacon'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 882,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1565,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2130,
				serves: 3
			}
		]
	},
	{
		name: 'Chicken Feast',
		image: 'img/pizzas/chicken-feast.png',
		toppings: ['Chicken Breast Strips', 'Mushrooms', 'Sweetcorn'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 882,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1565,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2130,
				serves: 3
			}
		]
	},
	{
		name: 'Vegetarian',
		image: 'img/pizzas/vegi-supreme.png',
		toppings: ['Onions', 'Green and Red Peppers', 'Sweetcorn', 'Mushrooms', 'Tomatoes'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 842,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1494,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2018,
				serves: 3
			}
		]
	},
	{
		name: 'Chicken Sweetcorn',
		image: 'img/pizzas/chicken-sweetcorn.png',
		toppings: ['Sweetcorn', 'Chicken Breast Strips'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 882,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1565,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2130,
				serves: 3
			}
		]
	},
	{
		name: 'Seafood',
		image: 'img/pizzas/tuna-supreme.png',
		toppings: ['Tuna', 'Sweetcorn', 'Onions'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 895,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1564,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2129,
				serves: 3
			}
		]
	},
	{
		name: 'Ham and Pineapple',
		image: 'img/pizzas/hawaiian.png',
		toppings: ['Ham', 'Pineapple', 'Mushrooms'],
		sizes: [
			{
				name: 'Small',
				inches: 9.5,
				price: 14.99,
				calories: 882,
				serves: 1
			},
			{
				name: 'Medium',
				price: 16.99,
				calories: 1555,
				inches: 11.5,
				serves: 2
			},
			{
				name: 'Large',
				price: 20.99,
				inches: 13.5,
				calories: 2082,
				serves: 3
			}
		]
	},
] as const;

export const Sides = [
	{
		name: 'Potato Wedges',
		image: 'img/sides/potato-wedges.png',
		calories: 496,
		serves: 2,
		price: 4.99
	},
	{
		name: 'Cookies',
		image: 'img/sides/cookies.png',
		calories: 694,
		serves: 4,
		price: 4.99
	},
] as const;

export const Crusts = {
	Traditional: {
		name: 'Traditional',
		calories: 0,
		price: 0
	},
	'Thin and Crispy': {
		name: 'Thin and Crispy',
		calories: -98,
		price: 0
	},
	Stuffed: {
		name: 'Stuffed',
		calories: 400,
		price: 4.99
	}
} as const;

export const Drinks = [
	{
		name: 'Cola',
		price: 0.90,
		calories: 343,
		serves: 1,
		image: 'img/drinks/cola.png'
	},
	{
		name: 'Lemonade',
		price: 0.80,
		calories: 126,
		serves: 1,
		image: 'img/drinks/lemonade.png'
	},
	{
		name: 'Fizzy Orange',
		price: 0.90,
		calories: 263,
		serves: 1,
		image: 'img/drinks/fizzy-orange.png'
	}
];

export const Toppings = {
	Pepperoni: {
		calories: 50
	},
	Onions: {
		calories: 23
	},
	Ham: {
		calories: 179
	},
	'Chicken Breast Strips': {
		calories: 168
	},
	Sweetcorn: {
		calories: 8
	},
	Mushrooms: {
		calories: 16
	},
	Pineapple: {
		calories: 28
	},
	'Green and Red Peppers': {
		calories: 24
	},
	'Pork Meatballs': {
		calories: 287
	},
	Sausage: {
		calories: 69
	},
	Pickles: {
		calories: 13
	},
	Olives: {
		calories: 48
	},
	'Ground Beef': {
		calories: 182
	},
	Bacon: {
		calories: 189
	},
	Jalapenos: {
		calories: 68
	}
};