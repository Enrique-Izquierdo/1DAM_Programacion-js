const RLSYNC = require('readline-sync');
let numero;
let totalNumeros = 0;
let totalPares = 0;
let totalImpares = 0;

let totalNumSin0;
let totalParSin0;

do {
    numero = RLSYNC.questionFloat('Dame un número (el 0 finaliza el proceso):');
    totalNumeros += 1;
    if (numero%2 == 0) {
        totalPares += 1;
    } else { 
        totalImpares += 1;
        }
} while (numero != 0)

totalNumSin0 = totalNumeros - 1;
totalParSin0 = totalPares - 1;

console.log(totalNumSin0, 'numeros introducidos, \nde los cuales', totalParSin0, 'son pares, y', totalImpares, 'son impares');
