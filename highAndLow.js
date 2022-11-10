/**
 * @param {Number[]} numbers An array of numbers
 * @returns A string made of the first and lowest number separated by a space
 */
function highAndLow(numbers){
    return Math.max(...numbers.split(" ")
                           .map(Number))
          + " "
          + Math.min(...numbers.split(" ")
                            .map(Number));
}