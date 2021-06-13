const RLSYNC = require('readline-sync');


function esPar (num) {
    if(num%2 == 0) {
        return true;
    } else {
        return false;
    }
}


let numero


numero = RLSYNC.questionInt('Dame un número: ');

if (esPar(numero)) {
    console.log(numero, 'es par');
} else {
    console.log(numero, 'es impar');
}