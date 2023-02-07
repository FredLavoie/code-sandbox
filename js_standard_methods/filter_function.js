//
//
/****************************************************************************/
// filter out the even numbers
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered1 = arr1.filter(number => {
	return number % 2 === 0;
});

console.log('filter out the even numbers');
console.log(filtered1);	// [2, 4, 6, 8, 10]

/****************************************************************************/
// filter out the numbers smaller than 35

const arr3 = [12, 5, 8, 130, 44];

function isBigEnough(value) {
	return value >= 10;
}

var filtered3 = arr3.filter(isBigEnough);

console.log('filter out numbers greater than 10');
console.log(filtered3);	// [12, 130, 44]


/****************************************************************************/
// filter built into function with criteria input
// example similar to MDN docs example

const arr4 = ['banana', 'apple', 'blueberry', 'orange', 'cherry'];

function filterByCriteria(array, test) {
	return array.filter(ea => ea.includes(test));
}
console.log('function with filter built in to search by creteria');
console.log('return items containing "rry" in the name:');
console.log(filterByCriteria(arr4, 'rry'));	// ['blueberry', 'cherry']
console.log('return items containing the letter "a" in the name:');
console.log(filterByCriteria(arr4, 'a'));	// ['banana', 'apple', 'orange']

