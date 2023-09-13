'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => a - b)
    let valorMinimo = 0
    let valorMaximo = 0
    
    for(let i = 0; i < arr.length-1; i++){
        valorMinimo += arr[i]
    }
    
    for(let j = 1; j < arr.length; j++){
        valorMaximo += arr[j]
    }
    
    console.log(valorMinimo, valorMaximo)
    

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}