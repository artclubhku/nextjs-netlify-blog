export function makeObjectCopy(obj) {
	return Object.assign({}, obj);
}

const MONTHS = [
	"January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December" 
];

export function formatDate(dateNumber, mode='long') {
	const d = new Date(dateNumber);
	const curr_date = d.getDate();
	const curr_month = d.getMonth()
	const curr_year = d.getFullYear();
	if (mode === 'long')
		return MONTHS[curr_month] + " " + curr_date + ", " + curr_year
	else
	return curr_date + '/' + (curr_month + 1)
}
