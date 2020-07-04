"use strict"

alert(six(times(five(dividedBy(two())))));


// Функция по названию чисел и операций
function zero(f) {return !arguments.length ? 0 : f(0)};
function one(f) {return !arguments.length ? 1 : f(1)};
function two(f) {return !arguments.length ? 2 : f(2)};
function three(f) {return !arguments.length ? 3 : f(3)};
function four(f) {return !arguments.length ? 4 : f(4)};
function five(f) {return !arguments.length ? 5 : f(5)};
function six(f) {return !arguments.length ? 6 : f(6)};
function seven(f) {return !arguments.length ? 7 : f(7)};
function eight(f) {return !arguments.length ? 8 : f(8)};
function nine(f) {return !arguments.length ? 9 : f(9)};

function plus(f) {return (n)=> {return n + f}}
function minus(f) {return (n)=> {return n - f}}
function times(f) {return (n)=> {return n * f}}
function dividedBy(f) {return (n)=> {return Math.floor(n / f)}}
