let num;

const RLSYNC = require('readline-sync');

num = RLSYNC.questionFloat('Dame un numero entero del 1 al 10: ');

switch (num) {
    case 1:
        console.log(num, 'es I');
        break;
    case 2:
        console.log(num, 'es II');
        break;
    case 3:
        console.log(num, 'es III');
        break;
    case 4:
        console.log(num, 'es IV');
        break;
    case 5:
        console.log(num, 'es V');
        break;
    case 6:
        console.log(num, 'es VI');
        break;
    case 7:
        console.log(num, 'es VII');
        break;
    case 8:
        console.log(num, 'es VIII');
        break;
    case 9:
        console.log(num, 'es IX');
        break;
    case 10:
        console.log(num, 'es X');
        break;
    default:
        console.log('Los datos introducios no son validos, \npor no ser un número entero del 1 al 10.')                                                                                                                      
}