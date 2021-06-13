let tirada;
let numTiradas = 36000;
let resul = [0,0,0,0,0,0,0,0,0,0,0];
let porcen = [];

for (i=1; i<=numTiradas; i++) {
    tirada = Math.trunc(Math.random()*6+1) + Math.trunc(Math.random()*6+1);
    switch (tirada) {
        case 2:
            resul[0]+=1;
            break;
        case 3:
            resul[1]+=1;
            break;
        case 4:
            resul[2]+=1;
            break;
        case 5:
            resul[3]+=1;
            break;
        case 6:
            resul[4]+=1;
            break;
        case 7:
            resul[5]+=1;
            break;
        case 8:
            resul[6]+=1;
            break;
        case 9:
            resul[7]+=1;
            break;
        case 10:
            resul[8]+=1;
            break;
        case 11:
            resul[9]+=1;
            break;
        case 12:
            resul[10]+=1;
               break;
    }
}

for (j=0; j<resul.length; j++) {
    porcen[j] =  Math.round(resul[j] / numTiradas * 100);
    console.log ((j+2) + '\t' + resul[j] + '\t' + porcen[j]);
}

