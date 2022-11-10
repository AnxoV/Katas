/**
 * Formats an array of integers into (012) 345-6789
 * @param {Int[]} numbers The array of numbers
 * @returns {String} The formatted string
 */
function createPhoneNumber(numbers){
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`;
}