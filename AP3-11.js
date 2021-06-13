function primo(numero) {
    let primo = true;
    for (i=2; i<numero; i++) {
        if (numero%i == 0) {
            primo = false;
        } 
    }
    return primo;
}

let acumulador = " ";
for (n=1; n<=1000; n++) {
    if (primo(n)) {
        acumulador +=  n + ", ";
        //acumulador = n + ", " + acumulador;
    }
}

console.log(acumulador);

