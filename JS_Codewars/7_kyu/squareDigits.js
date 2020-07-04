"use strict"

// Возвести в квадрат каждую цифру заданного числа
console.log(squareDigits(999999));

function squareDigits(num) {
    return Number(num.toString().split('').map(i=>i*=i).toString('').replace(/,/g,''));
}