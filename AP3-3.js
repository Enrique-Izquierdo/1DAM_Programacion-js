const RLSYNC = require('readline-sync');

function diferenciaEdad (edad1, edad2) {
    if (edad1 >= edad2) {
        return edad1 - edad2;
    } else {
        return edad2 - edad1;
    }
}

let years1, years2

years1 = RLSYNC.questionFloat('Dame la edad de un hermano: ');
years2 = RLSYNC.questionFloat('Dame la edad del otro hermano: ');


console.log('La diferencia de edad es', diferenciaEdad(years1, years2));