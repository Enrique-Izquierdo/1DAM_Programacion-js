let mes;

const RLSYNC = require('readline-sync');

mes = RLSYNC.questionFloat('Indicame un mes, con un número entero del 1 al 12: ');

if (Math.trunc(mes) - mes == 0) {
    switch (mes) {
        case 1:
            console.log (mes, 'corresponde a enero y tiene 31 días');
            break;
        case 2:
            console.log (mes, 'corresponde a febrero y tiene 28 días');
            break;
        case 3:
            console.log (mes, 'corresponde a marzo y tiene 31 días');
            break;
        case 4:
            console.log (mes, 'corresponde a abril y tiene 30 días');
            break;
        case 5:
            console.log (mes, 'corresponde a mayo y tiene 31 días');
            break;
        case 6:
            console.log (mes, 'corresponde a junio y tiene 30 días');
            break;
        case 7:
            console.log (mes, 'corresponde a julio y tiene 31 días');
            break;
        case 8:
            console.log (mes, 'corresponde a agosto y tiene 31 días');
            break;    
        case 9:
            console.log (mes, 'corresponde a septiembre y tiene 30 días');
            break;
        case 10:
            console.log (mes, 'corresponde a octubre y tiene 31 días');
            break;
        case 11:
            console.log (mes, 'corresponde a noviembre y tiene 30 días');
            break;
        case 12:
            console.log (mes, 'corresponde a diciembre y tiene 31 días');
            break;
        default:
                console.log ('El valor introducido no está comprendido entre 1 y 12');
    }
} else {
    console.log ('Los datos introducidos no son validos por no ser un número entero');
}