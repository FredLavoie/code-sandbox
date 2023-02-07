
// These array methods are NOT pure, they modify the array

/****************************************************************************/
// array 'shift' and 'unshift'
// Adds and removes items from the START of the array

const arr1 = ['a', 'b', 'c', 'd'];
console.log('original array   =>', arr1);
arr1.unshift('apple');
console.log('after unshift()  =>',arr1);
arr1.shift();
console.log('after shift()    =>', arr1);

/****************************************************************************/
// array 'push' and 'pop'
// Adds and removes items from the END of the array

const arr2 = ['a', 'b', 'c', 'd'];
console.log('original array   =>', arr2);
arr2.push('apple');
console.log('after push()     =>',arr2);
arr2.pop();
console.log('after pop()      =>', arr2);
