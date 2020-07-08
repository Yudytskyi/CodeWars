// Задачи на математические функции JavaScript

// Работа с %

// 1 Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
console.log('Task 1');
console.log(`remainder of the division = ${10 % 3}`);

// 2 Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
console.log('');
console.log('Task 2');
f2(6, 4)

function f2(a, b) {
    a % b ? console.log(`remainder of the division =${a % b}`) : console.log("Is divided");
}

// Работа со степенью и корнем

// 3 Возведите 2 в 10 степень. Результат запишите в переменную st.
console.log('');
console.log('Task 3');
f3(2, 10)

function f3(a, b) {
    console.log(`${a}^${b} = ${Math.pow(a, b)}`)
}

// 4 Найдите квадратный корень из 245.
console.log('');
console.log('Task 4');
console.log(Math.sqrt(245).toFixed(3))

// 5 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
console.log('');
console.log('Task 5');
console.log(f5([4, 2, 5, 19, 13, 0, 10]))

function f5(array) {
    return `Result = ${Math.sqrt(array.reduce((sum, el) => sum += Math.pow(el, 3), 0)).toFixed(3)}`
};

// Работа с функциями округления

// 6 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
console.log('');
console.log('Task 6');
f6();
f6(1);
f6(2)

function f6(n) {
    console.log(Math.sqrt(379).toFixed(n))
}

// 7 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
console.log('');
console.log('Task 7');

const obj = {
    ceil: Math.ceil(Math.sqrt(587)),
    floor: Math.floor(Math.sqrt(587)),
};

console.log(`ceil = ${obj.ceil}, floor = ${obj.floor}`)

// Нахождение максимального и минимального числа

// 8 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log('');
console.log('Task 8');

const arr8 = [4, -2, 5, 19, -130, 0, 10];

console.log(`max = ${Math.max(...arr8)},  min = ${Math.min(...arr8)}`);

//Работа с рандомом

// 9 Выведите на экран случайное целое число от 1 до 100.
console.log('');
console.log('Task 9');

console.log(Math.round(Math.random() * 100));

// 10 Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).
console.log('');
console.log('Task 10');

const arr10 = [];

for (; arr10.length < 10; arr10.push(Math.round(Math.random() * 100))) ;

console.log(arr10);

// Работа с модулем

// 11 Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
console.log('');
console.log('Task 11');

f11(5, 34);
f11(4, 23);

function f11(a, b) {
    console.log(`ABS(${a} - ${b}) = ${Math.abs(a - b)}`);
};

// 12 Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
console.log('');
console.log('Task 12');

f12(3, 5)
f12(45, 578)

function f12(a, b) {
    const c = Math.abs(a - b);
    return console.log(`C = ABS(${a} - ${b}) = ${c}`);
};

//Задачи

// 13 Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
console.log('');
console.log('Task 13');

const arr13 = [12, 15, 20, 25, 59, 79];
console.log(`Average from (${arr13}) = ${arr13.reduce((s, i) => s + i) / arr13.length}`);

// 14 Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
console.log('');
console.log('Task 14');

f14(5)
f14(12)

function f14(n) {
    console.log(`${n}! = ${f(n)}`)
    function f(n) {
        return (n === 0 ? 'ERROR!!!' : n === 1 ? 1 : n * f(n - 1))
    };
};