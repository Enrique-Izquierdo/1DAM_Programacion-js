let velocidad;
let tiempo;
const RLSYNC = require('readline-sync');

velocidad = RLSYNC.question('Dame la velocidad en metros/segundo: ');
tiempo = RLSYNC.question('Dame la duración del desplazamiento en segundos: ')

console.log('La distancia recorrida es', velocidad * tiempo, 'metros');