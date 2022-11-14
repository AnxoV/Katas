/**
 * Creates an array of values made from
 * walking the array clockwise.
 * 
 * [
 *  [1, 2],
 *  [3, 4]
 * ] -> [1, 2, 4, 3]
 * 
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]
 * ] -> [1, 2, 3, 6, 9, 8, 7, 4, 5]
 * 
 * @param {Int[][]} array A bidimensional array of ints
 * @return {Int[]} An array of the snail path to follow
 */
function snail(array) {
    let rst = [];
    for (let depth = 0; depth < Math.round(array.length/2); depth++) {
        // Top row
        for (let i = depth; i < array[0].length-depth; i++) {
            rst.push(array[depth][i]);
        }
        // Right row
        for (let i = depth+1; i < array.length-depth; i++) {
            rst.push(array[i][array[0].length-depth-1]);
        }
        // Bottom row
        for (let i = array.length-depth-2; i >= depth; i--) {
            rst.push(array[array[0].length-depth-1][i]);
        }
        // Left row
        for (let i = array.length-depth-2; i >= depth+1; i--) {
            rst.push(array[i][depth]);
        }
    }
    return rst;
}



console.log(snail([
    [1, 2],
    [3, 4]
]));