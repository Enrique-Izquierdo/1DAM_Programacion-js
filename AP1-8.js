let letra1, letra2;

const RLSYNC = require('readline-sync');

letra1 = RLSYNC.question('Dame una letra: ');
letra2 = RLSYNC.question('Dame una letra: ');

if (letra1 >= 'a' && letra1 <= 'z') {
    console.log(letra1, 'es una letra minúscula');
    } else {
        console.log(letra1, 'no es una letra minúscula');
        }

if (letra2 >= 'a' && letra2 <= 'z') {
    console.log(letra2, 'es una letra minúscula');
    } else {
        console.log(letra2, 'no es una letra minúscula');
        }