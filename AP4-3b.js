function cargaArray () {
    const RL_SYNC = require('readline-sync');
    let array = [];
    for (i=0; i<10; i++) {
        array [i] = RL_SYNC.questionInt('Dame un numero entero y positivo, para el elemento ' + (i+1) + ' del vector: ');
    }
    return array;
}

/** Calcula la cantidad de numeros pares e impares que contiene un vector
 *  @param {array} array Parametro para un vector
 * */
function cantidadParImpar (array) {
    let acumulaPar = 0;
 
    for (i=0; i<array.length; i++) {
        if (array[i]%2 == 0) {
            acumulaPar += 1;
        }
    }
    console.log ('El array '+ array + ' tiene ' + acumulaPar + ' elementos pares, y ' + (array.length - acumulaPar) + ' elementos impares.');
}

//console.log (cargaArray());

let vector = [];
vector = cargaArray();

console.log (vector);
console.log (vector.length);

cantidadParImpar(vector);
