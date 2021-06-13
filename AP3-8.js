function dameNumero() {
    let acumulador, numero;
    acumulador = ' ';

    for (i=1; i<=6; i++) {
        numero = Math.round(49*Math.random());
        acumulador = numero + ', ' + acumulador;
    }

    return acumulador;
}


console.log(dameNumero());
