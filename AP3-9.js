function calculaSuma(numero1, numero2){
    
    let mayor, menor;
    if (numero1 > numero2) {
        mayor = numero1;
        menor = numero2;
    } else {
        mayor = numero2;
        menor = numero1;
    }

    let acumulador = 0;
    for (i=menor; i<=mayor; i++) {
        if (i%2==0) {
            acumulador+=i;
        }
    } 
    return acumulador;

}

const RLSYNC = require('readline-sync');
let num1, num2;
num1 = RLSYNC.questionInt('Dame un numero entero positivo: ');
num2 = RLSYNC.questionInt('Dame otro numero entero positivo: ');

console.log(calculaSuma(num1, num2), 'es la suma de los numeros pares comprendidos entre', num1, 'y', num2);
