let frase1;
let frase2;
const RLSYNC = require('readline-sync');

frase1 = RLSYNC.question('Escribe una frase: ');
frase2 = RLSYNC.question('Escribe otra frase: ');

if (frase1 === frase2) {
    console.log('Ambas frase son identicas');
    } else {
            console.log('Ambas frase son distintas');
            }
