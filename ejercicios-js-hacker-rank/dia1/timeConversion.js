'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const [tiempo, ampm] = [s.slice(0,-2), s.slice(-2)];
    const separador = tiempo.split(':');
    const [, minutos, segundos] = separador;
    let [hora] = separador;
    
    if(hora === '12') hora = '00';
    if(ampm == 'PM') hora = Number(hora) + 12;
    
    return [hora, minutos ,segundos].join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}