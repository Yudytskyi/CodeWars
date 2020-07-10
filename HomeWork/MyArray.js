function MyArray() {
    this.length = 0;
    this.isMyArray = ((array)=> array.constructor.name==='MyArray');
}
const myArrayProto = new MyArray();
MyArray.prototype = myArrayProto;
// Object.setPrototypeOf(MyArray, muArrayProto);

myArrayProto.push = function () {
    for (; this.length < arguments.length; this[this.length++] = arguments[this.length - 1]) ;
};
myArrayProto.find = function () {};
myArrayProto.includes = function (searchElement, fromIndex = 0) {
    const index = fromIndex < 0 ?
        (this.length + fromIndex) < 0 ? 0
            : this.length + fromIndex : fromIndex;
    for (let i = index; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true
        }
    }
    ;
    return false
};
myArrayProto.join = function (separator = ',') {
    separator = separator.toString();
    let str = '';
    for (let i = 0; i < this.length; i++) {
        str += i < this.length - 1 ? this[i] + separator : this[i];
    }
    return str;
}
myArrayProto.filter = function (collback, thisArg) {
    // if (thisArg){this = thisArg};
    const newArray = [];
    let n=0;
    for (let i=0; i<this.length;i++){
        if (collback(this[i],i,this)){newArray[n++]=this[i]}};
    return newArray;
};
myArrayProto.map = function (collback, thisArg) {
    // if (thisArg){this = thisArg};
    const newArray = [];
    for (newArray.length; newArray.length<this.length;){
        newArray[newArray.length]=collback(this[newArray.length],newArray.length,this)}
    return newArray;};
myArrayProto.reduse = function () {};
myArrayProto.flat = function () {};
myArrayProto.pop = function () {};


const arr = new MyArray();

arr.push(2, 5, 4, 7, 9);
// arr.join('-00-');
const arrF = arr.filter(i=>i%2===0);
const arrM = arr.map(i=>i%2);

console.log(arrM)