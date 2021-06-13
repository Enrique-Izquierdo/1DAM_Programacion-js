let vocal;

const RLSYNC = require('readline-sync');

vocal = RLSYNC.question('Dame una vocal: ');


switch (vocal.toUpperCase()) {
    case 'A' :
        console.log(vocal, 'es la primera vocal');
        break;
    case 'E' :
        console.log(vocal, 'es la segunda vocal');
        break;
    case 'I' :
        console.log(vocal, 'es la tercera vocal');
        break;
    case 'O' :
        console.log(vocal, 'es la cuarta vocal');
        break;
    case 'U' :
        console.log(vocal, 'es la quinta vocal');
        break;
    default:
        console.log(vocal, 'no es una vocal');
}