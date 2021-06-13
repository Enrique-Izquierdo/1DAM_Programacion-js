let numA, numB, numC;
const RLSYNC = require('readline-sync');

numA = RLSYNC.questionFloat('Dame un número: ');
numB = RLSYNC.questionFloat('Dame otro número: ');
numC = RLSYNC.questionFloat('Dame un último número: ');

if (numA > numB && numA > numC) {
    console.log(numA, 'es mayor que', numB, 'y', numC);
} else if (numB > numA && numB > numC) {
     console.log(numB, 'es mayor que', numA, 'y', numC);
    } else {
         console.log(numC, 'es mayor que', numA, 'y', numB);
         }