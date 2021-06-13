function precioFinal(precioInicial, descuento) {
    // el descuento debe recibirse en %
    let precioConDesc, precioConIva;
    precioConDesc = precioInicial - precioInicial*descuento/100;
    precioConIva = precioConDesc + precioConDesc*16/100;
    console.log('El precio final del producto es', precioConIva);
}

const RLSYNC = require('readline-sync');
let preIni, desc;
// el descuento (desc) debe recibirse en %

do {
    preIni = RLSYNC.questionFloat('Indique el precio inicial, sin descuentos, ni IVA (presione 0 para salir del programa):');
    if (preIni != 0){
        desc = RLSYNC.questionFloat('Indique el descuento (%) a aplicar: ');
        precioFinal(preIni, desc);
    }
    console.log();
} while (preIni != 0) 
