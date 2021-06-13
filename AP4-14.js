let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let indmes, mes, dia;

for (i=1; i<=10; i++) {
    indMes = Math.trunc(Math.random() * 12);
    mes = meses[indMes];

    if (mes == 'febrero') {
        dia = Math.trunc(Math.random() * 28 + 1);
    } else if (mes == 'diciembre') {
        dia = Math.trunc(Math.random() * 29 + 1);
    } else if (mes == 'septiembre' || mes == 'noviembre') {
        dia = Math.trunc(Math.random() * 30 + 1);
    } else {
        dia = Math.trunc(Math.random() * 31 + 1);
    }

    console.log(dia, 'de', mes, 'de 2018');
}