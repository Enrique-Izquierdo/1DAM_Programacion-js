let velocidad;
let tiempo;
const RLSYNC = require('readline-sync');

velocidad = RLSYNC.questionFloat('Dame la velocidad en metros/segundo: ');
tiempo = RLSYNC.questionFloat('Dame la duración del desplazamiento en segundos: ')

console.log('La distancia recorrida es', velocidad * tiempo, 'metros');