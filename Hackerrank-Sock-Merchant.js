//Solution Funciton
function pares(arr){
    var cont=0;
    for(let i=0; i<arr.length-1;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]==arr[j]){
                console.log("El elemento: "+arr[i]+" En el indice i: "+i+" Es igual al elemento: "+arr[j]+" en el indice j: "+j);
                console.log("Array antes del splice: " +arr);
                cont++;
                //arr.splice(i,1);
                let aux = j-arr.length;
                console.log("Aux es: "+aux);
                arr.splice(aux,1);
                arr.splice(i,1);
                i=0;
                j=0;
                console.log("Array despues del splice: "+ arr);
                console.log("El contador incrementa a: "+cont);
            }
        }
    }
    return cont;
}

console.log(pares([10, 20, 20, 10, 10, 30, 50, 10, 20]));


//Complete solution
/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
 var cont=0;
    for(let i=0; i<ar.length-1;i++){
        for(let j=i+1; j<ar.length;j++){
            if(ar[i]==ar[j]){
                cont++;
                let aux = j-ar.length;
                ar.splice(aux,1);
                ar.splice(i,1);
                i=0;
                j=i+1;
            }
        }
    }
    return cont;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
*/
