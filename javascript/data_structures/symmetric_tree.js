// @ts-check

// Given a binary tree root, check if it's symmetric around
// its center (a mirrior of itself)

// Majority of tree problems are solved recursively, and
// depth-first search is more commonly used

const root = [1, 2, 2, 3, 4, 4, 3];

/**
 * @param {} root1
 * @param {} root2
 * @return {boolean}
 */
function rootsAreSymmetric(root1, root2) {
    if (!root1 && !root2) return true;
    if ((!root1 && root2) || (root1 && !root2)) return false;
    if (root1.val !== root2.var) return false;

    return rootsAreSymmetric(root1.left, root1.right) && rootsAreSymmetric(root1.right, root2.left);
}

/**
 * @param {number[]} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) return true;
    return rootsAreSymmetric(root.left, root.right);
}

//=============================================================================
// Couldn't find an actual working example with input data
// being passed into functions
