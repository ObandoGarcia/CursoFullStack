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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
   let contadorPos = 0
   let contadorNeg = 0
   let contadorCer = 0
   
   for(let i = 0; i < arr.length; i++){
       if(arr[i] > 0){
           contadorPos +=1
       }else if(arr[i] < 0){
           contadorNeg +=1
       }else{
           contadorCer +=1
       }        
   } 
   
   let positivos = contadorPos / arr.length
   let negativos = contadorNeg / arr.length
   let cero = contadorCer/ arr.length
   
   console.log(positivos.toFixed(6))
   console.log(negativos.toFixed(6))
   console.log(cero.toFixed(6))
   

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}