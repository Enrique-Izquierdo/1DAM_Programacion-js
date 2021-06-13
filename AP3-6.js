function sumasSucesivas(numero1, numero2) {
    
    let acumulador = 0;
   
    for(i=1; i<=numero1; i++) {
        acumulador+=numero2;
    }
   
    console.log(acumulador);
}

const RLSYNC = require('readline-sync');
let num1, num2;
num1 = RLSYNC.questionFloat('Dame un numero: ');
num2 = RLSYNC.questionFloat('Dame otro numero: ');

console.log(num1, 'x', num2, '=');
sumasSucesivas(num1, num2);
