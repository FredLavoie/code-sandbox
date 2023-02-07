// @ts-check

// Given a sorted array of integers and an integer target,
// find the index of the first and last postion of the target
// integer in the array.
// If the taget cannot be found, return [-1, -1]

const arr = [2, 4, 5, 5, 5, 5, 5, 7, 9, 9];
const target = 5;
// expected results: [2, 6]

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function findFirstAndLast(arr, target) {
    const result = [-1, -1];
    // loop through array from the beginning until
    // you reach the first target, then stop the loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result[0] = i;
            break;
        }
    }
    // if we don't find even one instance of the target
    // after looping through the whole index, then return
    // the results
    if (result[0] === -1) return result;
    // loop through array from the end until you
    // reach the second target, then stop the loop
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === target) {
            result[1] = i;
            break;
        }
    }
    return result;
}

const output = findFirstAndLast(arr, target);

console.log("*** output: ", output);
