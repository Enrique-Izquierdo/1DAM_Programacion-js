let ganados, perdidos, empatados;

const RLSYNC = require('readline-sync');

ganados = RLSYNC.questionFloat('Indicame el número de partidos ganados: ');
empatados = RLSYNC.questionFloat('Indicame el número de partidos empatados: ');
perdidos = RLSYNC.questionFloat('Indicame el número de partidos perdidos: ');

if (Math.trunc(ganados) - ganados == 0 
    && Math.trunc(empatados) - empatados == 0 && Math.trunc(perdidos) - perdidos == 0) {

    console.log('El equipo ha obtenido', ganados * 3 + empatados * 1 + perdidos * 0, 'puntos');

} else {
    console.log('Los valores introducidos no son validos por ser números decimales');
}
