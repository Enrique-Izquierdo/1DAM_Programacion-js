function numRomano (num) {
    switch (num) {
        case 10:
            return 'X';
        case 9:
            return 'IX';
        case 8:
            return 'VIII';
        case 7:
            return 'VII';        
        case 6:
            return 'VI';
        case 5:
            return 'V';
        case 4:
            return 'IV';
        case 3:
            return 'III';        
        case 2:
            return 'II';
        case 1:
            return 'I';
        default:
            return 'ERROR. \nEl valor introducido no esta entre el 1 y el 10';
    }
}

let numero;
const RLSYNC = require('readline-sync');

numero = RLSYNC.questionInt('Dame un numero entero entre 1 y 10: ');

console.log(numero, 'es igual a', numRomano(numero));
