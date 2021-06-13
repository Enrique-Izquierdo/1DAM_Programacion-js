const RLSYNC = require('readline-sync');
let caracteres = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//console.log(caracteres.indexOf('Z'));
let pos, letra;
let resultado = [];
//let resultFinal = [];

do {
    pos = RLSYNC.question('Dame una posicion del 0 al 25 del array o, -1 para salir del programa: ');
    if (pos>=0 && pos<=25) {
        letra = caracteres[pos];
        resultado[resultado.length] = letra;
    }
} while (pos!=-1)

console.log(resultado.toString());