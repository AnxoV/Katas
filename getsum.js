/**
 * @param {Int} a The first number
 * @param {Int} b The second number
 * @returns {Int} The sum of consecutive numbers from a to b 
 */
function getSum(a, b) {
    return (a+b)*(Math.abs(a-b)+1) / 2;
}