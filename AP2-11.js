const RLSYNC = require('readline-sync');
let valor1, valor2, vMayor, vMenor, n;
let totalImpar = 0;

valor1 = RLSYNC.questionFloat('Dame un valor entero positivo: ');
while (Math.round(valor1) - valor1 != 0 || valor1 < 0) {
    console.log('Valor no valido, por no ser entero positivo');
    valor1 = RLSYNC.questionFloat('Dame un valor entero positivo: ');
}

valor2 = RLSYNC.questionFloat('Dame otro valor entero positivo: ');
while (Math.round(valor2) - valor2 != 0 || valor2 < 0) {
    console.log('Valor no valido, por no ser entero positivo');
    valor2 = RLSYNC.questionFloat('Dame otro valor entero positivo: ');
}

if (valor2 > valor1) {
    vMayor = valor2;
    vMenor = valor1;
} else {
    vMayor = valor1;
    vMenor = valor2;
}

console.log ('El valor mayor es', vMayor);
console.log ('El valor menor es', vMenor);

n = vMenor;

do {
    if (n%2 != 0) {
        totalImpar += n;
    }
    n++;
} while (n <= vMayor);

console.log ('La suma de los números impares comprendidos entre', valor1, 'y', valor2, ', \nes:', totalImpar);