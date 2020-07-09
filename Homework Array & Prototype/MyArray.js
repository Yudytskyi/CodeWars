// Прототипное наследование в JavaScript

// Реализовать функцию конструктор MyArray.

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray();  // подсказка: instanceof

function MyArray() {
    this.length = 0;
    this.isMyArray = ((array) => array.constructor.name === 'MyArray');
}

const myArrayProto = new MyArray();
MyArray.prototype = myArrayProto;
// Object.setPrototypeOf(MyArray, muArrayProto);

myArrayProto.push = function (...args) {
    for (let i in args) {
        this[this.length++] = args[i]
    }
    return this;
};

myArrayProto.find = function () {
};

myArrayProto.includes = function (searchElement, fromIndex = 0) {
    const index = fromIndex < 0 ?
        (this.length + fromIndex) < 0 ? 0
            : this.length + fromIndex : fromIndex;
    for (let i = index; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }
    }
    return false;
};

myArrayProto.join = function (separator = ',') {
    separator = separator.toString();
    let str = '';
    if (this.length === 0) {
        return str
    }
    for (let i = 0; i < this.length; i++) {
        str += i < this.length - 1 ? this[i] + separator : this[i];
    }
    return str;
}

myArrayProto.filter = function (collback, thisArg) {
    const newArray = [];
    let n = 0;
    for (let i = 0; i < this.length; i++) {
        if (collback(this[i], i, this)) {
            newArray[n++] = this[i]
        }
    }
    return newArray;
};

myArrayProto.map = function (collback, thisArg) {
    // if (thisArg){this = thisArg};
    const newArray = [];
    for (newArray.length; newArray.length < this.length;) {
        newArray[newArray.length] = collback(this[newArray.length], newArray.length, this)
    }
    return newArray;
};

myArrayProto.reduse = function (callback, initialValue) {
    if (this.length === 0) {
        return initialValue ? initialValue : TypeError;
    }

    let countElelments = 0, result;

    for (let i of this) {
        if (i) {
            countElelments++;
            if (countElelments === 1) {
                result = i;
            }
        }
    }

    if (countElelments === 1 && !initialValue) {
        return result;
    }

    let n = 1;

    if (initialValue) {
        result = initialValue;
        n = 0;
    }

    for (let i = n; i < this.length; i++) {
        if (this[i]) {
            result += callback(this[i], i, this)
        }
    }

    return result;
};

myArrayProto.flat = function () {
};

myArrayProto.pop = function () {
};


const arr = new MyArray();
const arr1 = new MyArray();
const arr2 = new Array();

console.log(`arr.isMyArray(arr1) => ${arr.isMyArray(arr1)}`);
console.log(`arr.isMyArray(arr2) => ${arr.isMyArray(arr2)}`);
console.log(' ');

arr.push(2, 5, 4, 7, 9);
console.log('arr.Push(2, 5, 4, 7, 9) =>');
console.log(arr);
console.log(' ');


const arrJoin = arr.join('-0-');
console.log(`arr.join('-0-') => ${arrJoin}`);
console.log(' ');

const arrFilter = arr.filter(i => i > 4);
console.log(`arr.filter(i > 4) => ${arrFilter}`);
console.log(' ');

const arrMap = arr.map((i, n, a) => n < a.length - 1 ? i * a[n + 1] : i);
console.log(`arr.map(n < a.length-1 ? i * a[n + 1] : i) => ${arrMap}`);
console.log(' ');

arr[2] = '';
console.log(arr)
const arrReduse = arr.reduse(i => i + 1, 8);
console.log(`arr.reduse( i + 1) => ${arrReduse}`);
console.log(`arr1.reduse( i + 1) => ${arr1.reduse(i => i + 1)}`);

console.log(' ');