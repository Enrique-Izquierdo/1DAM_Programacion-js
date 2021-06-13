const RLSYNC = require('readline-sync');
let letra;

do {
    letra = RLSYNC.question('Presiona la letra X: ');
} while (letra.toUpperCase() != 'X');