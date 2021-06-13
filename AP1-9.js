let dividendo;
let divisor;
const RLSYNC = require('readline-sync');

dividendo = RLSYNC.question('Dame un número: ');
divisor = RLSYNC.question('Dame otro número: ');

if (divisor == 0) {
    console.log('No puede cálcularse la división por ser el divisor igual a cero');
    } else {
            console.log('El resultado de dividir', dividendo, 'entre', divisor, 'es igual a', (dividendo/divisor).toFixed(2));
            }