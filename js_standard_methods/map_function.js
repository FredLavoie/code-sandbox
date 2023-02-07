// map function example from Learning JavaScript - Ethan Brown
const items = ['apples', 'bananas'];
const prices = [1.25, 0.85];

const cart = items.map((ea, index) => 
	({
		name: ea,
		price: prices[index]
	})
);
console.log('This is the cart:');
console.log(cart);

/****************************************************************************/
// simple addition with map
const numbers = [1,2,3,4,5,6,7,8,9,10];

const modArr = numbers.map(ea => {
	return ea + 3;
});
console.log('Add 3 to each item in the array:');
console.log(modArr);

