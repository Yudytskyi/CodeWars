const userAge = prompt('Enter your age','');

alert(isAdult(userAge))

/**
 *
 * @param {number} age
 * @returns {boolean}
 */
function isAdult(age) {
    return age > 17 ? true : false;
}

