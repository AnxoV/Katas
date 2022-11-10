/**
 * Calculates the first n numbers of the tribonnaci sequence.
 * The singature acts as the initial condition of the sequence:
 * [1, 1, 1] -> [1, 1, 1, 3, 5, 9, ...]
 * [0, 0, 1] -> [0, 0, 0, 1, 2, 4, ...]
 * [0, 1, 1] -> [0, 1, 1, 2, 4, 7, ...]
 * 
 * @param {Int[]} signature The first three numbers of the sequence
 * @param {Int} n The amount of numbers in the sequence to display
 * @returns {Int[]} The n first numbers of the sequence
 */
function tribonacci(signature, n) {
    for (let i = 0; i < n; i++) signature.push(signature[i]+signature[i+1]+signature[i+2]);
    return signature.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 5));