// Kata: https://www.codewars.com/kata/551f23362ff852e2ab000037

/**
 * Returns the maximum addition from consecutive numbers from top to bottom.
 *                                      1       \1\
 *  input: [[1], [2, 3], [5, 6, 4]] -> 2 3  -> 2/3/ -> 1 + 3 + 6 = 10
 *                                    5 6 4   5/6/4
 * @param {Int[][]} pyramid A bidimensional array of ints
 * @returns {Int} The maximum addition of values
 */
function longestSlideDown (pyramid) {
    for (let i = 1; i < pyramid.length; i++) {
        for (let j = 0; j < pyramid[i].length; j++) {
            let rowB = pyramid[i-1];
            if (!rowB[j-1]) {
                pyramid[i][j] += rowB[j];
            } else if (!rowB[j]) {
                pyramid[i][j] += rowB[j-1];
            } else {
                if (rowB[j-1] >= rowB[j]) pyramid[i][j] += rowB[j-1];
                else pyramid[i][j] += rowB[j];
            }
        }
    }
    return Math.max(...pyramid[pyramid.length-1]);
}