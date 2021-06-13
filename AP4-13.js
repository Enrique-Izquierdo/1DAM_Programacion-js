function obtenerLetra(numeroDNI) {
    let modulo, letra;
    let listLetra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    modulo = numeroDNI%23;    
    letra = listLetra[modulo];
    return letra;
}

const RLSYNC = require('readline-sync');
let dni = RLSYNC.questionInt('Dame un numero de DNI: ');

console.log(obtenerLetra(dni), 'es la letra que corresponde al DNI', dni);


