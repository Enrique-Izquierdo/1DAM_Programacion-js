function calcPrimos(arr, limite) {
    let num = 1;
    let j = 0;
    while (j<limite) {
        let i = 2;       
        let comp = false;
        do {
            if (num == 1 || num == 2) {
                comp = false;
            } else if (num%i==0) {
                comp = true;
            } 
            i++
        } while (i<num)

        let primo = !comp;
        if (primo) {
            arr[j]=num;  
            j++;
        } 
    
        num++
    }    
}

const RLSYNC = require('readline-sync');
let tamArray = RLSYNC.questionInt('Dime el numero de elementos del array: ');
let arrayPrimos = [];

calcPrimos(arrayPrimos,tamArray);

console.log(arrayPrimos);


