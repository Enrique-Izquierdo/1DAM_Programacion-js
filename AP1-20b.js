let precioSinIva, iva, localidad, ciclo, curso, descLoc, descCic, descCur, descTotal;
let precioSinIvaConDesc, precioFinal;
const RLSYNC = require('readline-sync');

precioSinIva = RLSYNC.questionFloat('Indique el precio \(sin IVA\) del producto: ');

iva = ['16', '21'], index = RLSYNC.keyInSelect(iva, 'Indique tipo de IVA que le aplica: ');

if (iva[index]) {

    localidad = RLSYNC.keyInYNStrict('¿Eres de Catarroja? ');
    ciclo = RLSYNC.keyInYNStrict('¿Eres alumno de DAM? ');
    curso = RLSYNC.keyInYNStrict('¿Eres del primer curso? ');

    if (localidad) {
        descLoc = 5;
    } else {
        descLoc = 0;
    }

    if (ciclo) {
        descCic = 5;
    } else {
        descCic = 0;
    }

    if (curso) {
        descCur = 5;
    } else {
        descCur = 0;
    }

    descTotal = descLoc + descCic + descCur;
    console.log('Acumulas un descuento total del:', descTotal);

    precioSinIvaConDesc = (precioSinIva - (precioSinIva * descTotal / 100));
    console.log('El precio sin IVA, aplicados los descuentos es:', precioSinIvaConDesc);

    precioFinal = (precioSinIvaConDesc + (precioSinIvaConDesc * iva[index] / 100));
    console.log('El precio final, aplicados los descuentos y el IVA es:', precioFinal);

} else {
    console.log ('Ha cancelado la operación');
}