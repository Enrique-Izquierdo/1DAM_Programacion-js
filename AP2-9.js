const RLSYNC = require('readline-sync');
let total0_9 = 0;
let caracter;

do {
    caracter = RLSYNC.question('Presiona un caracter (el . finaliza el proceso): ');
    if( caracter >= "0" && caracter <= "9") {
        total0_9 += 1;
    }
} while (caracter != ".")

console.log ('Número total de carácteres entre 0 y 9:', total0_9);