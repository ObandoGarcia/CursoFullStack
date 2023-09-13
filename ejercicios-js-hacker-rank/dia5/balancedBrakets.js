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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        const caracter = s[i];
        
        if(caracter === "[" || caracter === "(" || caracter === "{"){
            stack.push(caracter);
        }else{
            if(stack.length === 0) return "NO";
            
            const cabecera = stack.pop();
            
            if(cabecera === "[" && caracter !== "]" || cabecera === "(" && caracter !== ")" ||  cabecera === "{" && caracter !== "}"){
                return "NO";
            }
        }
    }
    
    return stack.length === 0 ? "YES" : "NO";
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}