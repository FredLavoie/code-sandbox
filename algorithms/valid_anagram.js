// @ts-check

// given two strings, s1 and s2, check if they are anagrams.
// Two strings are anagrams if they're made of the same characters
// with the same frequency.
// Example: "danger" "garden"

// The best way to handle this kind of problem is a hash table

const s1 = "nameless";
const s2 = "salesmen";

const s3 = "xdanger";
const s4 = "gardens";

/**
 * @param {string} inputString
 * @return {Record<String, any>}
 */
function createHashTable(inputString) {
    const hashTable = {};
    for (const char of inputString) {
        if (Object.keys(hashTable).includes(char)) {
            hashTable[char] += 1;
        } else {
            hashTable[char] = 1;
        }
    }
    return hashTable;
}

/**
 * @param {Record<string, any>} hash1
 * @param {Record<string, any>} hash2
 * @return {boolean}
 */
function areAnagrams(hash1, hash2) {
    if (Object.keys(hash1).length !== Object.keys(hash2).length) return false;

    for (const key in hash1) {
        if (hash1[key] !== hash2[key]) return false;
    }
    return true;
}

const hash1 = createHashTable(s1);
const hash2 = createHashTable(s2);
const firstPairIsAnagram = areAnagrams(hash1, hash2);

const hash3 = createHashTable(s3);
const hash4 = createHashTable(s4);
const secondPairIsAnagram = areAnagrams(hash3, hash4);

console.log("*** firstPairIsAnagram: ", firstPairIsAnagram);
console.log("*** secondPairIsAnagram: ", secondPairIsAnagram);

//***********************************************************************************
// Alternative method
// This solution is simpler with less lines of code, however it is less
// efficient in terms of space and time complexity

/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */
function areAnagrams2(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;
    const firstStringSorted = firstString.split("").sort().join("");
    const secondStringSorted = secondString.split("").sort().join("");
    return firstStringSorted === secondStringSorted;
}

console.log("*** alternative anagram function: ", areAnagrams2(s1, s2));
