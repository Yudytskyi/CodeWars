const num1 = prompt('Enter first number','');
const num2 = prompt('Enter second number','');

alert(checkMultiplicity(num1,num2))

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function checkMultiplicity(num1,num2) {
    return num1 % num2 === 0 ? true : false
}


