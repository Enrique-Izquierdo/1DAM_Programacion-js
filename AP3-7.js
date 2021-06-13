function tipoCaracter(caracter) {
    do {
        if (caracter >= 0 && caracter <= 9) {
            return 'digito';
        } else if (caracter >= 'A' && caracter <= 'Z' || caracter >= 'a' && caracter <= 'z' ) {
            return 'alfabetico';
        } else {
            return 'otro';
        }
    } while (caracter != '.') 
}

const RLSYNC = require('readline-sync');
let tecla;
tecla = RLSYNC.question('Presiona un caracter (el "." finaliza el programa): ');

tipoCaracter(tecla);

console.log(tecla, 'es', tipoCaracter(tecla));