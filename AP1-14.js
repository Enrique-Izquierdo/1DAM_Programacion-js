let ladoA, ladoB, ladoC;

const RLSYNC = require('readline-sync');

ladoA = RLSYNC.questionFloat('Dame un lado en cm: ');
ladoB = RLSYNC.questionFloat('Dame un lado en cm: ');
ladoC = RLSYNC.questionFloat('Dame un lado en cm: ');

if (ladoA == ladoB && ladoB == ladoC) {
    console.log('El triangulo es equilatero');
} else if ((ladoA == ladoB || ladoB == ladoC) || ladoA == ladoC) {
    console.log('El triangulo es isosceles');
} else {
    console.log('El triangulo es escaleno');
}