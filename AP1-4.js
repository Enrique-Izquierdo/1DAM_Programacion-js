let numero;

const RLSYNC = require('readline-sync');

numero = RLSYNC.questionFloat('Dame un número: ');

if (numero % 10 == 0) {
    console.log(numero, 'es múltiplo de 10');
} else {
        console.log(numero, 'no es múltiplo de 10');
    }
