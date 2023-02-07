// first element passed in is the accumulator, followed by the
// current array element and the current index.

/****************************************************************************/
// sum all values in an array with starting value being 0
const arr1 = [1, 2, 3, 4, 5];

let sum1 = arr1.reduce((acc, item) => {
	return acc += item;	
}); // <- no starting value, therefore taken as being equal to 0

console.log('reduce method sums all array items starting at 0:');
console.log(sum1);	// 15

/****************************************************************************/
// sum all values in an array with starting value being 5
const arr2 = [1, 2, 3, 4, 5];

let sum2 = arr2.reduce((acc, item) => {
	return acc += item;	
}, 5); // <- place starting value here

console.log('reduce method sums all array items starting at 5:');
console.log(sum2); // 20

/****************************************************************************/
// 


