// Задачи на математические функции JavaScript

// Работа с %

// 1
// console.log(`remainder of the division = ${10 % 3}`);

// 2
// function f(a, b) {
//     a % b ? console.log(`remainder of the division =${a % b}`) :console.log("Is divided");
// }

// Работа со степенью и корнем

// 3
// f1(2,10)
// function f1(a,b) {
//     const st = Math.pow(a, b);
//     console.log(st)
// }

// 4
// console.log(Math.sqrt(245))

// 5
// console.log(f([4, 2, 5, 19, 13, 0, 10.]))
// function f(array) {
// return Math.sqrt(array.reduce((sum, el)=> sum+=Math.pow(el, 3),0))
// }

// Работа с функциями округления

// 6
// f();f(1);f(2)
// function f(n) {
//     console.log(Math.sqrt(379).toFixed(n))
// }

// 7
// const obj = {
//     ceil: Math.ceil(Math.sqrt(587)),
//     floor: Math.floor(Math.sqrt(587)),
// };
// console.log(`ceil = ${obj.ceil}, floor = ${obj.floor}`)

// Нахождение максимального и минимального числа

// 8
// const arr = [4, -2, 5, 19, -130, 0, 10];
// console.log(`max = ${Math.max(...arr)},  min = ${Math.min(...arr)}`);

//Работа с рандомом

// 9
// console.log(Math.round(Math.random() * 100));

// 10
// const arr=[]
// for(;arr.length<10;arr.push(Math.round(Math.random() * 100)));
// console.log(arr);

// Работа с модулем

// 11
// console.log(f(5,34));
// function f(a,b) {return Math.abs(a-b)};

// 12
// console.log(f(3, 5));
// function f(a, b) {
//     const c = Math.abs(a - b)
//     return c;};

//Задачи

// 13
// const arr = [12, 15, 20, 25, 59, 79];
// console.log(arr.reduce((s,i)=>s+i)/arr.length);

// 14
// console.log(f(12));
// function f(n) {return (n === 0 ? 'ERROR!!!': n===1 ? 1 : n * f(n-1))};