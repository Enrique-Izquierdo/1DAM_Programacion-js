const RLSYNC = require("readline-sync");
let elemento = [ ];
let suma = 0
/**
 * Bucle que solicita 5 numeros
 */
for (i=0; i<5; i++) {
    elemento [i] = RLSYNC.questionInt('Dame el numero entero que ocupara la posicion '+ (i+1)+ ':');
    suma += elemento [i];
}


console.log ('La media aritmetica de los elementos del vector', elemento, 'es', suma/elemento.length);