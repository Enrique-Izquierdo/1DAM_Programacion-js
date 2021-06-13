let numero;

const RLSYNC = require('readline-sync');

numero = RLSYNC.questionFloat('Dame un número entero: ');

if (numero - Math.trunc(numero) == 0) {
    /* un número es entero, cuando 
    el número menos el mismo número sin decimales (Math.trunc) 
    da como resultado cero */
    if (numero % 2 == 0) {
        console.log(numero, 'es un número par');
        } else if (numero % 2 == 1){
            console.log(numero, 'es un número impar');
        }
} else {
    console.log("el numero es decimal, por lo que no es valorable la propiedad par e impar")
}