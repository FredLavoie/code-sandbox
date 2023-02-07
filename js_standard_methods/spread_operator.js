//
//
/****************************************************************************/
// apply Math method to each item of the arrays
function minMax(arr){
	return [Math.min(...arr), Math.max(...arr)];
}

console.log('find min and max in an array');
console.log(minMax([1,2,3,4,5]));	// [1, 5]
console.log(minMax([134533,5]));	// [5, 134533]
console.log(minMax([1]));					// [1, 1]

/****************************************************************************/
// 