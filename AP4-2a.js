function cargaArray(arr, limite) {
    const RL_SYNC = require('readline-sync');
    for (i=0; i<limite; i++) {
        arr [i] = RL_SYNC.questionFloat("Dame el elemento " + (i+1) +" del vector: ");
    }
    return arr;
}


function verPosElemArray(arr, limite) {
    for (i=0; i<limite; i++) {
        console.log ('En la posicion ' + i + ', el numero', arr[i]);
    }
}

const RLSYNC = require('readline-sync');
let vect = [];
let numElem;

numElem = RLSYNC.questionInt('Indicame el numero de elementos que vas a cargar: ');

console.log( cargaArray(vect, numElem) );

verPosElemArray(vect, numElem);