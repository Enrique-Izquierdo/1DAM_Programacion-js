const RLSYNC = require('readline-sync');
let multiplicador1;
let multiplicador2;
let resultado = 0;

multiplicador1 = RLSYNC.questionFloat('Dame un multiplicador: ');
multiplicador2 = RLSYNC.questionFloat('Dame otro multiplicador: ');

for (let i=1; i<=multiplicador2; i++) {
    resultado += multiplicador1;
}

console.log (multiplicador1, 'x', multiplicador2, '=', resultado);