const length1 = prompt('Enter first length','');
const length2 = prompt('Enter second length','');
const length3 = prompt('Enter third length','');

alert(checkPossibilityTriangle(length1, length2, length3))

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function checkPossibilityTriangle(a,b,c) {
    return (
        (a > b && a > c && a < b + c) ||
        (b > a && b > c && b < a + c) ||
        (c > a && c > b && c < a + b) ? true : false
    )
}

