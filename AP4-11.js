const RLSYNC = require('readline-sync');
let v = [];
let u =[];

for (i=0; i<10; i++) {
    v[i] = RLSYNC.questionInt('Dame un numero entero para el elemento '+ (i+1) + ' del vector v: ');
}

console.log(v);

for (j=1; j<=v.length; j++) { //repite la operación tantas veces como número de elementos contiene el array
    for (i=0; i<v.length; i++) { //recorre todas las posiciones del array
        if (v[i+1]>v[i]){
            v.splice(i, 0, v[i+1]); //situa el elemento mayor delante del elemento menor
            v.splice(i+2, 1); // borra el elemento mayor de su antigua ubicación
        }
    }
}

u = v.slice(0);
console.log(u);