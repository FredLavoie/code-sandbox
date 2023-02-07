//
//
/****************************************************************************/
//

function addX(x) {
	return function(n) {
		return n + x;
  };
}
let num = 4;
const addThree = addX(3);	// This assigns 3 to 'x'
let sum = addThree(num); // addThree is now the function inside addX(x)
console.log('example partial application', sum);	// 7