// @ts-check

// Given an array of integers, find the smallest
// integer that isn't in the array

// Example:
// [0, 1, 2, 4, 5, 6, 7]
// answer: 3

const arr1 = [4, 2, 1, 7]; // 0
const arr2 = [4, 2, 1, 0]; // 3
const arr3 = [2, 0, 1, 3]; // 4

/**
 * @param {number[]} arr
 */
function smallestIntegerNotInArray(arr) {
    let i = 0;
    while (i < arr.length) {
        if (!arr.includes(i)) {
            return i;
        }
        i++;
    }
    return arr[arr.length - 1] + 1;
}

console.log("*** smallestIntegerNotInArray(arr1): ", smallestIntegerNotInArray(arr1));
console.log("*** smallestIntegerNotInArray(arr2): ", smallestIntegerNotInArray(arr2));
console.log("*** smallestIntegerNotInArray(arr3): ", smallestIntegerNotInArray(arr3));
