const RLSYNC = require('readline-sync');
let n, contrasenya;

for (n = 1; n <= 5; n++) {
    contrasenya = RLSYNC.question('Teclee la contraseña: ');
    if (contrasenya == 'ALDEBARAN'){ 
        console.log('Contraseña correcta');
        break;
    } else if (n == 5) {
        console.log('No ha facilitado la cotraseña correcta.');
    }
}