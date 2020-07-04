"use strict"

console.log(tickets([25,25,50,25,50,100,25,50,100]));

// Сможет ли кассир дать сдачу по купюрам
function tickets(peopleInLine) {
    let cash = [0, 0, 'YES', 0];
    peopleInLine.forEach(i => {cash[i/25-1]++;
        if (i/25-1 === 1) {cash[0] ? cash[0]-- : cash[2] = 'NO'}
        if (i/25-1 === 3) {if(cash[0] && cash[1]) {cash[0]--; cash[1]--}
        else {cash[0]>2 ? cash[0]-=3 : cash[2]= 'NO'}}})
    return cash[2];
}

