let pSinIva, Iva, pConIva;
let v_Iva = false;
const RLSYNC = require('readline-sync');


while (pSinIva != 0) {

    do{
        pSinIva = RLSYNC.questionFloat('Indica el precio sin IVA: ');
    } while (pSinIva < 0)

    if (pSinIva == 0) {
        break;
    }

    do{
        Iva = RLSYNC.questionFloat('Indica si el IVA es del 16 o de 21% (teclea 16 o 21): ' );
        if (Iva == 16){
            v_Iva = true;
        }
        if (Iva == 21){
            v_Iva = true;
        }
    } while (v_Iva == false);

    console.log('El precio con IVA es:', pSinIva + pSinIva*Iva/100);
}