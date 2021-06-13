const RLSYNC = require('readline-sync');

function esMultiplo (num) {
    if (num%10 == 0) {
        return true;
    } else {
        return false;
    }
}


let numero;

numero = RLSYNC.questionFloat('Dame un numero: ');

if (esMultiplo(numero)) {
    console.log(numero, 'es multiplo de 10');
} else {
    console.log(numero, 'no es multiplo de 10');
}