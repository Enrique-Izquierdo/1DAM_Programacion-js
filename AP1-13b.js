let hora, min, seg;
let numDigHora, numDigMin, numDigSeg;
let hora2Dig, min2Dig, seg2Dig;
const NUM_DIG = 2;
const RLSYNC = require('readline-sync');

hora = RLSYNC.questionFloat('Indicame una hora \(un número entero entre 0 y 23\): ');
min = RLSYNC.questionFloat('Indicame unos minutos \(un número entero entre 0 y 59\): ');
seg = RLSYNC.questionFloat('Indicame unos segundos \(un número entero entre 0 y 59\): ');

numDigHora = String(hora).length
numDigMin = String(min).length
numDigSeg = String(seg).length

if ((hora - Math.trunc(hora) == 0 && min - Math.trunc(min) == 0) && seg - Math.trunc(seg) == 0) {
    if (((hora >= 0 && hora <=23) && (min >= 0 && min <=59)) && (seg >= 0 && seg <=59)) {
        if (numDigHora = 1) { 
            hora = '0' + String(hora);
        }
        if (numDigMin = 1) { 
            min = '0' + String(min);
        }
        if (numDigSeg = 1) { 
            seg = '0' + String(seg);
        }
        console.log(hora + ':' + min + ':' + seg,'es una hora valida');
    } else {
        console.log('Alguno de los valores facilitados no es valido, por estar fuera del rango indicado');
    }
} else {
    console.log('Alguno de los valores facilitados no es valido, por tratarse de un número decimal');
}
