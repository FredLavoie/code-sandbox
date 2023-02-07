// @ts-check

// Given an array of integers and an integer,
// find the kth largest element

// Example:
// [1, 2, 3, 4, 5, 6, 7]
// k = 5
// The 5th largest element is 3

const arr = [4, 2, 9, 7, 5, 6, 7, 1, 3];
const k = 4;

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function kThLargestNumber(arr, k) {
    // sort array in reverse order to get the largest
    // numbers at the begining of the array
    const reverseSortedArr = arr.sort((a, b) => b - a);
    // convert array to a set in order to remove duplicates
    const arrSet = new Set(reverseSortedArr);
    // if the size of the set is smaller than k, then it's
    // impossible for there to be a kth largest number
    if (arrSet.size < k) return -1;
    // convert set back to an array and get the kth value
    return [...arrSet][k - 1];
}

console.log("*** kThLargestNumber: ", kThLargestNumber(arr, k));
