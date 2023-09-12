const formatter = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

function round(number: number): string {
	return formatter.format(number);
}

export default round;