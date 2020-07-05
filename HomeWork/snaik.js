// // VARIANT 1.   Creating a one-dimensional array
// const l=5;
// let arr=[];
// let cot = 1;
// for(let i=0; i<l;i++){arr.push([])}
// for(let i=0; i<l;i++){for (let j=0; j<l;j++){
//     arr[i][j] = cot++;
// }}
//
// const snail =function (arr) {
//     if (!arr.toString()){return []};
//     if (!arr[0][0]){return arr};
//
//     const n = arr.length-1;
//     const arrOut =[];
//
//     for (let i = 0; i < (n + 1) / 2; i++) {
//         fill(i, i, 1, 0);
//         fill(n - i, i, 0, 1);
//         fill(n - i, n - i, -1, 0);
//         fill(i, n - i, 0, -1);
//
//         function fill(carrX, carrY, x, y) {
//             for (let j = 0; j < n - i * 2; j++) {arrOut.push(arr[carrY + y * j][carrX + x * j])}
//         };
//     };
//
//     if ((n+1)%2){arrOut.push(arr[n/2][n/2])}
//
//     return arrOut;
// }
//
// console.log(snail(arr));


// VARIANT 2.   Creating a two-dimensional array
const l=7;
let arr=[];
for(let i=0; i<l;i++){arr.push([])}

const snail =function (arr) {
    if (arr.length === 0){return [[]]} else {if (arr.length === 1){return [[1]]}}

    const n = arr.length-1;
    let count = 1;
    for (let i = 0; i < (n + 1) / 2; i++) {
        fill(i, i, 1, 0);
        fill(n - i, i, 0, 1);
        fill(n - i, n - i, -1, 0);
        fill(i, n - i, 0, -1);

        function fill(carrX, carrY, x, y) {
            for (let j = 0; j < n - i * 2; j++) {arr[carrY + y * j][carrX + x * j] = count++}
        };
    };

    if ((n+1)%2){arr[n/2][n/2]=count}

    return arr;
}
console.table(snail(arr))