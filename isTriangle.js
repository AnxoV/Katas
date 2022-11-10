/**
 * @param {Number} a The first side
 * @param {Number} b The second side
 * @param {Number} c The third side
 * @returns {boolean} True if a triangle can be build with those sides, false otherwise
 */
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}