function MyArray() {this.length = 0}

const muArrayProto = new MyArray();

MyArray.prototype = muArrayProto;
// Object.setPrototypeOf(MyArray, muArrayProto);

muArrayProto.pushs = function () {for(; this.length < arguments.length; this[this.length++] = arguments[this.length-1]);};

muArrayProto.includes = function (searchElement, fromIndex = 0) {
    const index = fromIndex<0 ?
        (this.length + fromIndex)<0 ? 0
            : this.length + fromIndex: fromIndex;
for(let i=index; i<this.length; i++)
{if (this[i] === searchElement){return true}}; return false};

muArrayProto.join = function (separator = ',') {
    separator = separator.toString();
    let str = '';
    for(let i=0; i< this.length; i++){
        str += i< this.length-1 ? this[i] + separator: this[i];
    }
return str;
}

const arr = new MyArray();

arr.pushs(2,5,4,7,9)
 let string = arr.join(111);
console.log(string);