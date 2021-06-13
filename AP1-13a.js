let hora, min, seg;
const RLSYNC = require('readline-sync');

hora = RLSYNC.questionFloat('Indicame una hora \(un número entero entre 0 y 23\): ');
min = RLSYNC.questionFloat('Indicame unos minutos \(un número entero entre 0 y 59\): ');
seg = RLSYNC.questionFloat('Indicame unos segundos \(un número entero entre 0 y 59\): ');


if ((hora - Math.trunc(hora) == 0 && min - Math.trunc(min) == 0) && seg - Math.trunc(seg) == 0) {
    if (((hora >= 0 && hora <=23) && (min >= 0 && min <=59)) && (seg >= 0 && seg <=59)) {
        console.log(hora + ':' + min + ':' + seg,'es una hora valida');
    } else {
        console.log('Alguno de los valores facilitados no es valido, por estar fuera del rango indicado');
    }
} else {
    console.log('Alguno de los valores facilitados no es valido, por tratarse de un número decimal');
}
