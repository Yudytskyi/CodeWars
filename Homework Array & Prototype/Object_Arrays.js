// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ. ОБЪЕКТ STRING. ОБЪЕКТ MATH.

//  Задание 1

//  1. Функция принимает массив и выводит его на экран.
console.log('Задание 1');
console.log('Task 1');

f1([1, 4, 5, 6, 7, 8]);

function f1(arr) {
    console.table(arr);
};

//  2.  Функция принимает массив и выводит только четные элементы.
console.log('');
console.log('Task 2');

f2([1, 4, 5, 6, 7, 8]);

function f2(arr) {
    console.table(arr.filter(i => !!i && i % 2 === 0));
};

//    3.  Функция принимает массив и возвращает сумму всех элементов массива.
console.log('');
console.log('Task 3');

f3([1, 4, 5, 6, 7, 8, -5]);

function f3(arr) {
    console.log(arr.reduce((a, i) => a += i, 0));
};

//   4.  Функция принимает массив и возвращает его максимальный элемент.
console.log('');
console.log('Task 4');

f4([1, 4, 5, 455, 6, 7, 8, -5]);

function f4(arr) {
    console.log(Math.max(...arr));
};

//    5.  Функция добавления нового элемента в массив по указанному индексу.
console.log('');
console.log('Task 5');

f5([1, 4, 5, 455, 6, 7, 8, -5], 'elem', 2);

function f5(array, element, n) {
    console.log(array.splice(0, n).concat(element, array.slice(n - 2)));
};

//   6.  Функция удаления элемента из массива по указанному индексу.
console.log('');
console.log('Task 6');

f6([1, 4, 5, 455, 6, 7, 8, -5], 3);

function f6(array, n) {
    const arrNew = [].concat(array.slice(0, n), array.splice(n + 1));
    console.log(arrNew);
};

//  Задание 2
console.log('');
console.log('Задание 2');

//    1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
console.log('');
console.log('Task 1');

console.log(f2_1([1, 2, 3, 3, 99, 'fdag', 4, 5, 6], [1, 2, 98, 3, 'fdag', 5, 6, 7, 7, 9, , 889, 8, 8, 8, 8]));

function f2_1(arr1, arr2) {
    return arr1.concat(arr2).filter((i, n, a) => !a.slice(n + 1).includes(i));
}

//     2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
console.log('');
console.log('Task 2');

console.log(f2_2([1, 2, 3, 88, 3, 99, 'fdag', 4, 5, 6, undefined], [1, 2, 98, 3, 'fdag', 5, 6, 7, 7, 9, , 889, 8, 88, 8, 8]));

function f2_2(arr1, arr2) {
    return arr1.filter((i, n, a) => arr2.includes(i) && !a.slice(n + 1).includes(i) && n < a.length - 1);
};

//     3.  Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
console.log('');
console.log('Task 3');

console.log(f2_3([1, 2, 3, 88, 3, 99, 'fdag', 4, 5, 6, undefined], [1, 2, 98, 3, 'fdag', 5, 6, 7, 7, 9, , 889, 8, 88, 8, 8]));

function f2_3(arr1, arr2) {
    return arr1.filter((i) => !arr2.includes(i));
};