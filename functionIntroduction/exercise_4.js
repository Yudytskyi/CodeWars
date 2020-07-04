const figure = prompt('The area of which figure (body) needs to be calculated? \n' +
    '1 - Rhombus\n' +
    '2 - Cylinder\n' +
    '3 - Triangle\n' +
    '4 - Rectangle', '');

switch (figure) {
    case '1':
        const lengthRhombus = Number(prompt('Enter the side length of the rhombus', ''));
        const angleRhombus = Number(prompt('Enter the angle of the rhombus', ''));
        alert('Area of a rhombus ' + calculateAreaRhombus(lengthRhombus, angleRhombus));
        break;
    case '2':
        const heightСylinder = Number(prompt('Enter cylinder height', ''));
        const radiusСylinder = Number(prompt('Enter cylinder radius', ''));
        alert('Cylinder surface area ' + calculateAreaCylinder(heightСylinder, radiusСylinder));
        break;
    case '3':
        const lengthA = Number(prompt('Enter the length of side a', ''));
        const lengthB = Number(prompt('Enter the length of side b', ''));
        const lengthC = Number(prompt('Enter the length of side c', ''));
        alert('Area of a triangle ' + calculateAreaTriangle(lengthA, lengthB, lengthC));
        break;
    case '4':
        const length1 = Number(prompt('Enter the length of side 1', ''));
        const length2 = Number(prompt('Enter the length of side 2', ''));
        alert('Area of a rectangle ' + calculateAreaRectangle(length1, length2));
        break;
    default:
        alert('Data entry error!!!')
}

/**
 *
 * @param {number} a
 * @param {number} angle
 * @returns {number}
 */
function calculateAreaRhombus(a, angle) {
    return a * a * Math.sin(angle * Math.PI / 180)
}

/**
 *
 * @param {number} h
 * @param {number} r
 * @returns {number}
 */
function calculateAreaCylinder(h, r) {
    return 2 * Math.PI * r * (h + r)
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function calculateAreaTriangle(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calculateAreaRectangle(a, b) {
    return a * b
}