function classnames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

export default classnames;