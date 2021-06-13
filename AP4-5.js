/**
 * funcion para cargar elementos en un array hasta que el elemento dado por teclado sea igual a 0.
 * @param {array} arr  Parametro para el array al que se quieren pasar datos por referencia.
 */
function cargaArray(arr) {
    const RD_SYNC = require('readline-sync');
    let i = 0;
    let pedirMas = true;
    do {
        arr[i] = RD_SYNC.questionInt('Dame el elemento '+ (i+1) + ' del array: ');
        if (arr[i] == 0) {
            pedirMas = false;
        }
        i++;
    } while (pedirMas)
    arr.pop();
}

let vector1 = [];
let vector2 = [];
let vector3 = [];

console.log ('\nIntroduce los numeros enteros del primer array.')
cargaArray(vector1);
console.log ('\nIntroduce los numeros enteros del segundo array.')
cargaArray(vector2);

if (vector1.length == vector2.length) {
    for (i=0; i<vector1.length; i++) {
        vector3[i] = vector1[i]*vector2[i];
        console.log('El resultado de multiplicar los elementos en la posicion', (i+1), 'es', vector3[i]);
    }
} else {
    console.log('\nLos arrays no tienen el mismo numero de elementos');
}

