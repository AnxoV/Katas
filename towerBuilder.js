/**
 * 1 -> ["*"]
 * 2 -> [" * ", "***"]
 * 3 -> ["  *  ", " *** ", "*****"]
 * and so on...
 * 
 * @param {Number} nFloors The number of pyramid floors
 * @returns {String[]} An array made of every floor of the pyramid
 */
function towerBuilder(nFloors) {
    return Array.from(Array(nFloors).keys())
                .map(i => " ".repeat(nFloors-i-1)
                     + "*".repeat((i+1)*2-1)
                     + " ".repeat(nFloors-i-1));
}