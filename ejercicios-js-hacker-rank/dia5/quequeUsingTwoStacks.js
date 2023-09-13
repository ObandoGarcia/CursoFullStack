function processData(input) {
    //Enter your code here
    
    let arr = input.split("\n");
    arr.shift();
    arr.join(" ");
    let resultado = [];
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i].split(" ");
        if(temp.length === 2){
            resultado.push(temp[1])
        }
        if(arr[i] == 2){
            resultado.shift();
        }
        if(arr[i] == 3){
            console.log(resultado[0]);
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});