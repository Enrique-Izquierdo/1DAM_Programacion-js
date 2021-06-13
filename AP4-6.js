function cargaArray(arr) {
    for (i=0; i<10; i++){
        arr[i] = Math.round(Math.random()*20);
    }
}

let vector1 = [];
let vector2 = [];
let vector3 = [];

cargaArray(vector1);
cargaArray(vector2);

for (j=0; j<10; j++) {
    vector3[j] = vector1[j]+vector2[j];
}

console.log(vector1);
console.log(vector2);
console.log(vector3);