/**
 * Deletes all the occurences of a found in b
 * @param {Int[]} a The first array
 * @param {Int[]} b The second array
 * @returns {Int[]} The resulting array
 */
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}