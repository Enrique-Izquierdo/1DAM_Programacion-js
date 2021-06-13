function cargaArray (arr, tipoElemento){
    const RL_SYNC = require('readline-sync');
    arr[0] = RL_SYNC.question('Introduce una marca de '+ tipoElemento + ': ');
    let i = 1;
    let continuar = true
    do{
        continuar = RL_SYNC.keyInYN('Desea introducir mas marcas? ');
        if (continuar) {
            arr[i] = RL_SYNC.question('Introduce una marca de '+ tipoElemento + ': ');
            i++;
        }
    } while (continuar)
}

/**
 * Función que concatena dos arrais, dando como resultado un nuevo array.
 * @param {array} arr1 Primer array a concatenar.
 * @param {array} arr2 Segundo array a concatenar.
 * @param {array} arr3 Array resultante de la concatencación.
 */
function concat2Array(arr1, arr2, arr3) {
    arr3 = arr1.slice(0);
    //console.log(arr3);
    for (i=0; i<arr2.length; i++) {
        arr3.push(arr2[i]);
    }
    //console.log(arr3);
}

let arrCoche = [];
let arrMoto = [];
let arrTrans = [];

cargaArray(arrCoche, 'coche');
console.log(arrCoche);
cargaArray(arrMoto, 'moto');
console.log(arrMoto);
concat2Array(arrCoche, arrMoto, arrTrans); //La funcion no carga el array arrTrans. Da como resultado un array vacio.
console.log(arrCoche, arrMoto, arrTrans); 