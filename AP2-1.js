let sueldo;
let sueldoAcumulado = 0;
let sueldoMaximo = 0;
let empleadoSueldoMaximo;
let sueldoMinimo = 1000000000000;
let empleadoSueldoMinimo;

const RLSYNC = require("readline-sync");


for (let i=1; i<=5; i++) {
    sueldo = RLSYNC.questionFloat('Indica el sueldo del operario ' + i + ' : ');
    sueldoAcumulado += sueldo;
    if (sueldo >= sueldoMaximo) {
        sueldoMaximo = sueldo;
        empleadoSueldoMaximo = i;
    } else if (sueldo <= sueldoMinimo) {
            sueldoMinimo = sueldo;
            empleadoSueldoMinimo = i;
        }
} 
console.log ('El sueldo promedio es', sueldoAcumulado/5, '€');
console.log ('El empleado ' + empleadoSueldoMaximo + ' tiene el mayor salario ('+sueldoMaximo+' €)');
console.log ('El empleado ' + empleadoSueldoMinimo + ' tiene el menor salario ('+sueldoMinimo+' €)');