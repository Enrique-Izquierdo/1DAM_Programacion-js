function pideArray(arr1) {
    const RL_SYNC = require('readline-sync');
    let pideNum;
    let i = 0;
    do {
        pideNum = RL_SYNC.questionInt('Dame el numero entero para el elmento '+(i+1)+' del array: ');
        if (pideNum != -1) {
            arr1[i] = pideNum;
        }
        i++;
    } while (pideNum != -1)
}

let vNum = [];
let vCapi = [];
let vCapiRev = [];

pideArray(vNum);
console.log(vNum);
vCapi = vNum.slice(0);
vCapiRev = vNum.reverse();
console.log(vCapi);
console.log(vCapiRev);


if (vCapi.toString() == vCapiRev.toString()) {
    console.log(vCapi, 'es capicua');
} else {
    console.log(vCapi, 'no es capicua');    
}


