// @ts-check

// Given an integer n, generate all the valid combinations
// of n pairs of parentheses

// Type: back tracking problem

const input = 3;
// expected results:
// ["((()))", "(()())", "(())()", "()(())"", "()()()"]

/**
 * @param {number} numPairs
 * @return {string[]}
 */
function generateParentheses(numPairs) {
    /**
     * @param {number} i
     * @param {number} diff
     * @param {string[]} comb
     * @param {string[]} combs
     */
    function recurse(i, diff, comb, combs) {
        if (diff < 0 || diff > 6) return;
        else if () {
            
        }
    }

    const validCombs = [];
    recurse(numPairs * 2, 0, [], validCombs);
    return validCombs;
}

console.log("*** generateParentheses(input): ", generateParentheses(input));
