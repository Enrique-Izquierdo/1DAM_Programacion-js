let operador = 0;
let i = 0;

for (let termino = 1; termino < 1000;  termino = termino + operador *2) {
    console.log (termino);
    operador = 2**i;
    i+=1;
}