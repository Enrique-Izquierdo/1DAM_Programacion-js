let nota1, nota2, nota3;

const RLSYNC = require('readline-sync');

nota1 = Number(RLSYNC.question('Dame la nota 1: '));
nota2 = Number(RLSYNC.question('Dame la nota 2: '));
nota3 = Number(RLSYNC.question('Dame la nota 3: '));

console.log('El promedio aritmético es', (nota1 + nota2 + nota3) / 3);