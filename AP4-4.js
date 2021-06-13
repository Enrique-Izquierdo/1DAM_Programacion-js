/**
 * Funcion que solicita los elementos de un array por teclado.
 * @param {array} arr Parametro en el que indicar el nombre del array al que se le pasaran los datos por refecencia.
 * @param {integer} limite  Parametro en el que indicar el numero de elementos del array.
 */
function cargaArray(arr, limite){
    const RL_SYNC = require('readline-sync');
    console.log('Introduce a continuacion los concursantes del primer al ultimo clasificado.');
    for(i=0; i<limite; i++){
        arr[i] = RL_SYNC.question('Indicame el nombre del concursante '+ (i+1) + ': ');
    }
    return arr;
}


const RLSYNC = require('readline-sync');
let numConc = RLSYNC.questionInt('Indicame el numero de concursantes (numero entero positivo):');
let clasif = [];

cargaArray (clasif, numConc);
console.log('Clasificación del concurso del primer al ultimo clasificado:', clasif.toString());

clasif.splice(2,2,'Celia','Raul');
console.log('Clasificación del concurso del primer al ultimo clasificado:', clasif.toString());

console.log(clasif.pop());
console.log('Clasificación del concurso del primer al ultimo clasificado:', clasif.toString());

clasif.splice(1,0,'Roberto','Amaya');
console.log('Clasificación del concurso del primer al ultimo clasificado:', clasif.toString());

console.log(clasif.unshift('Marta'));
console.log('Clasificación del concurso del primer al ultimo clasificado:', clasif.toString());