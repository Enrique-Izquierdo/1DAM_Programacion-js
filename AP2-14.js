let numAleatorio = Math.round(Math.random()*100);
// let numAleatorio = 40;
let num; 
let numIntentos = 0; 
const RLSYNC = require('readline-sync');

do {
    num = RLSYNC.questionFloat('Dame un número entero y positivo: ');
    if (num > numAleatorio){ 
        console.log('El número entero y positivo que tiene que adivinar, es menor que', num);
    } else if (num < numAleatorio){
            console.log('El número entero y positivo que tiene que adivinar, es mayor que', num);
        }
    numIntentos++;
} while (num != numAleatorio);

console.log('Ha adivinado el número, tras', numIntentos, 'intentos');