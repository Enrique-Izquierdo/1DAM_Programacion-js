let nombre, numAnyos, proseguir;

const RLSYNC = require('readline-sync');

do {
    nombre = RLSYNC.question('Introduzca el nombre del empleado: ');
    numAnyos = RLSYNC.questionFloat('Indique la antiguedad del empleado, en anyos: ');    
    if (numAnyos > 3 && numAnyos < 10) {
        console.log ('A', nombre, 'con', numAnyos, 'anyos de antiguedad,\nle corresponden', numAnyos*100, '€ de gratificacion');
    } else if (numAnyos >= 10 && numAnyos <= 15) {
        console.log ('A', nombre, 'con', numAnyos, 'anyos de antiguedad,\nle corresponden', numAnyos*115, '€ de gratificacion');
        } else if (numAnyos > 15) {
            console.log ('A', nombre, 'con', numAnyos, 'anyos de antiguedad,\nle corresponden', numAnyos*130, '€ de gratificacion');
            } else { 
                console.log ('A', nombre, 'con', numAnyos, 'anyos de antiguedad,\nno le corresponden gratificacion');
            }
    proseguir = RLSYNC.keyInYN('Desea calcular la gratificacion de otro empleado?');
} while (proseguir == true);