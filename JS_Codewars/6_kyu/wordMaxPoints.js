"use strict"


console.log(high(t));

// Слово с максимальным количеством очков
const t ='if two words score the same,   an rbcturn the word that appears return earliest in the original string.';

function high(x) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let arrayWordsAndPoints = x.split(' ').map((word,nun)=> word.replace(/\W/g, ''))
        .map(word=>[`0${word}`.split('')
            .reduce((points,letter)=>
                points= Number(points) + alphabet.indexOf(letter)),word]);
    return arrayWordsAndPoints.filter(i=>i[0]===Math.max.apply(null,arrayWordsAndPoints.map(i=>i[0])))[0][1];
}