// Задачи на работу с массивами в JavaScript

// Работа с concat

// 1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log('Task 1');

const arr1_1 = [1, 2, 3];
const arr1_2 = [4, 5, 6];
const arrSum = arr1_1.concat(arr1_2)
console.log(arrSum)

// 2
console.log('');
console.log('Task 2');

const arr2 = [1, 2, 3];
console.log(arr2.reverse())

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log('');
console.log('Task 3');

const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

// 4
console.log('');
console.log('Task 4');

const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
console.log('');
console.log('Task 5');

const arr5 = ['js', 'css', 'jq'];
console.log(arr5.shift());

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
console.log('');
console.log('Task 6');

const arr = ['js', 'css', 'jq'];
console.log(arr.pop());

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log('');
console.log('Task 7');

const arr7 = [1, 2, 3, 4, 5];
const arr7New = arr7.slice(0, 3);
console.log(arr7New);

// 8 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log('');
console.log('Task 8');

const arr8 = [1, 2, 3, 4, 5];
const arr8New = arr8.slice(3);
console.log(arr8New);

// 9 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log('');
console.log('Task 9');

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

// 10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log('');
console.log('Task 10');

const arr10 = [1, 2, 3, 4, 5];
const arr10New = arr10.splice(1, 3);
console.log(arr10New);

// 11 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('');
console.log('Task 11');

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11);

// 12 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('');
console.log('Task 12');

const arr12 = [1, 2, 3, 4, 5];

arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.splice(8, 0, 'e');

console.log(arr12);

// 13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log('');
console.log('Task 13');

const arr13 = [3, 4, 1, 2, 7];
console.log(arr13.sort());

// 14 Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
console.log('');
console.log('Task 14');

const obj14 =  {js:'test', jq: 'hello', css: 'world'};

console.log(Object.keys(obj14));




