let dvdendo, dvsor, numero;
let acumulador = 1;

console.log ('Números primos del 2 al 1000\n------------------------------');

// Algoritmo que calcula números compuestos 
// NOTA números compuestos, los que son divisibles --modulo = 0--
// por ellos mismos, la unidad y tambien por otros números. 
// NOTA: números primos, los que unicamente son divisibles --modulo = 0--
// por ellos mismos y por la unidad.


for (dvdendo=2; dvdendo<=1000; dvdendo++) {
    numero = 'primo';
    for (dvsor=2; dvsor<dvdendo; dvsor++) {
        if (dvdendo%dvsor==0) {
            numero = 'compuesto'
            // console.log(dvdendo);
            break;
        }
    }
    if (numero == 'primo') {
        console.log(acumulador + 'º -->', dvdendo);
        acumulador++;
    }
    if (acumulador == 51) {
        break;    }
}
