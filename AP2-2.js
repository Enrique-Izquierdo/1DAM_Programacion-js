const RLSYNC = require('readline-sync');
let edad;
let totalMayor = 0;
let totalMenor = 0;

for(let i = 1; i <= 4; i++) {
    edad = RLSYNC.questionFloat('Dime la edad de la persona '+ i + ': ');
    if(edad >= 0 && edad < 18) {
        totalMenor += 1;
    } else if(edad >= 18 && edad < 120){
            totalMayor +=1;
        } else {
            console.log (edad, 'nos es una edad valida');
            i--;
        }
} 

console.log (totalMayor, 'personas son mayores de edad');
console.log (totalMenor, 'personas son menores de edad');