const { setPrompt } = require("readline-sync");

function calculaPuntos (partGan, partEmp, partPerd, punGan, punEmp, punPer) {
    return punGan*partGan + punEmp*partEmp + punPer*partPerd;
}

let partidosG, partidosE, partidosP, puntosG, puntosE, puntosP;
const RLSYNC = require('readline-sync');

partidosG = RLSYNC.questionInt('Dime el numero de partidos ganados: ');
puntosG =  RLSYNC.questionFloat('Dime los puntos obtenidos por cada partido ganado: ');
partidosE = RLSYNC.questionInt('Dime el numero de partidos empatados: ');
puntosE =  RLSYNC.questionFloat('Dime los puntos obtenidos por cada partido empatado: ');
partidosP = RLSYNC.questionInt('Dime el numero de partidos perdidos: ');
puntosP =  RLSYNC.questionFloat('Dime los puntos obtenidos por cada partido perdido: ');

console.log('El equipo ha obtenido', calculaPuntos (partidosG, partidosE, partidosP, puntosG, puntosE, puntosP),'puntos');
