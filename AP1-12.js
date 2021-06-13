let numA, numB, numC;
const RLSYNC = require('readline-sync');

numA = RLSYNC.questionFloat('Dame un número: ');
numB = RLSYNC.questionFloat('Dame otro número que sea distinto al anterior: ');
numC = RLSYNC.questionFloat('Dame un último nuevo número: ');


if (numA == numB || numA == numC || numB == numC) {
    console.log('Los números suministrados no son validos, por ser algunos de ellos iguales.')
    } else if (numA > numB && numA > numC) {
        console.log(numA, 'es mayor que', numB, 'y', numC);
        } else if (numB > numA && numB > numC) {
            console.log(numB, 'es mayor que', numA, 'y', numC);
            } else {
                console.log(numC, 'es mayor que', numA, 'y', numB);
                }