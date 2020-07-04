"use strict"

// Содержит ли текст все буквы алфавита?

console.log('Iterate through the array with input words to find the one with the greatest sum');

function isPangram(string){
    return str.match(/([a-z])(?!.*\1)/gi).length === 26;
}
