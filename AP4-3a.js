/**
 * Funcion que solicita la entrada por teclado de los elementos de un vector.
 * Se ha utilizado el paso por referencia.
 * @param {array} arr Debe indicarse el nombre del array al que se desea pasar los datos por referencia.
 */
function cargaArray (arr) {
    const RL_SYNC = require('readline-sync');
    for (i=0; i<10; i++) {
        arr[i] = RL_SYNC.questionInt('Dame un numero entero y positivo, para el elemento ' + (i+1) + ' del vector: ');
    }
    return arr;
}

/** Calcula la cantidad de numeros pares e impares que contiene un vector.
 *  @param {array} arr Parametro para un vector
 * */
function cantidadParImpar (arr) {
    let acumulaPar = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
            acumulaPar += 1;
        }
    }
    console.log ('El array '+ arr + ' tiene ' + acumulaPar + ' elementos pares, y ' + (arr.length - acumulaPar) + ' elementos impares.');
}

//console.log (cargaArray());

let vector = [];

cargaArray(vector);
console.log (vector);
console.log (vector.length);
cantidadParImpar(vector);
