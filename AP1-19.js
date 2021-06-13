let totalVentas, porcComision;
const RLSYNC = require('readline-sync');

totalVentas = RLSYNC.questionFloat('Dame el total de ventas: ');

if (Math.trunc(totalVentas) - totalVentas == 0) {
    if (totalVentas >= 0) {
        if (totalVentas <= 999) {
            porcComision = 0;
            console.log('Le corresponde una comisión del 0%');            
        } else if (totalVentas <= 4999) {
                porcComision = 3;
                console.log('Le corresponde una comisión del 3%');
            } else if (totalVentas <= 19999) {
                    porcComision = 5;
                    console.log('Le corresponde una comisión del 5%');
                } else {
                    porcComision = 8;
                    console.log('Le corresponde una comisión del 8%');
            } 
        console.log('Recibirá una comisión de', totalVentas * porcComision / 100, '€');
    } else {
        console.log('No puede ser negativo, el número total de ventas')
    }
} else {
    console.log('No se admiten valores decimales en el número total de ventas');
}

