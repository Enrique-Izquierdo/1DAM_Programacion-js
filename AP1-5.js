let letra;

const RLSYNC = require('readline-sync');

letra = RLSYNC.question('Dame una letra: ');

if (letra >= 'A' && letra <= 'Z') {
    console.log(letra, 'es una letra mayúcula');
} else {
        console.log(letra, 'no es una letra mayúcula');
    }
