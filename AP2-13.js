const RLSYNC = require('readline-sync');
let temp, tempMax, tempMin;

temp = RLSYNC.questionFloat('Introduce la temperatura en ºC: ');
    tempMax = temp;
    tempMin = temp;

while (temp != 99) {
    temp = RLSYNC.questionFloat('Introduce la temperatura en ºC: ');
    if (temp > tempMax) {
        tempMax = temp;
    }
    if (temp < tempMin) {
        tempMin = temp;
    }
}

console.log('La máxima temperatura registrada, ha sido:', tempMax);
console.log('La mínima temperatura registrada, ha sido:', tempMin);