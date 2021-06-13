let gigasHD, megasHD, megasCD = 700, numCD;
const RLSYNC = require('readline-sync');
const MEGAS_1GIGA = 1024;

gigasHD = RLSYNC.questionFloat('Indicame la capacidad del HDD en GigaBytes: ');

megasHD = gigasHD * MEGAS_1GIGA;

numCD = Math.trunc(megasHD / megasCD) + 1; /*elimina los decimales (sin redondear) de 
                                            la cantidad de CDs calculada y sumanos 1
                                            para que quepa toda la información del HDD*/

console.log('Necesitas', numCD, 'CDs para copiar el HDD');