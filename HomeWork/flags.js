// // Работа с флагами в JavaScript
//
// //  1.  дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'.
// f([1, 2, 3, 88, 3, 'c', 99, 'fdag', 4, 5, 6, undefined]);
// function f(arr) {
//     const flag = arr.includes('c');
//     console.log(flag?'есть':'нет');
// };

// //   2.  необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет
// hasElem([1, 2, 3, 88, 3, 'c', 99, 'fdag', 4, 5, 6, undefined]);
// function hasElem(arr) {
//     const flag = arr.includes('c');
//     console.log(flag);
// };

// //   3. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// f([1, 2, 3, 88, 3, 5,8,65]);
// function f(arr) {
//     const flag = arr.includes(5);
//     console.log(flag?'да':'нет');
// };

// //    4.  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// (() => {
//     let flag = false;
//     for (let i = 2; i < a; i++) {
//         if (a % i === 0) {
//             flag = true
//         }
//     }
//     console.log(`${a} => ${flag} `)
// })
// (a = 31);

// //    5.  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
//  f([1,2,3,88,3,99,'flag','flag',4,5,6,undefined]);
// function f(arr) {
//     const flag = !!arr.filter((i,n,a)=> n>0 && i===a[n-1]).length
//     console.log(flag?'да':'нет');
//  };