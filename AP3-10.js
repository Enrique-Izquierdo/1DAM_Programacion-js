function primo(numero) {
    
    let primo = true;
    for (i=2; i<numero; i++) {
        
        if (numero%i == 0) {
            primo = false;
        } 
    
    }
    return primo;
}

const RLSYNC = require('readline-sync');
let num;

num = RLSYNC.questionInt('Dame un numero entero positivo: ');

if (primo(num)) {
    console.log(num, 'es un numero primo');
} else {
    console.log(num, 'no es primo (es un numero compuesto)');
}
