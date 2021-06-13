let edadHermano1;
let edadHermano2;
const RLSYNC = require('readline-sync');

edadHermano1 = RLSYNC.questionFloat('Indicame la edad de uno de los hermanos: ');
edadHermano2 = RLSYNC.questionFloat('Indicame la edad del otro hermano: ')

if (edadHermano1 > edadHermano2) {
    console.log('El hermano mayor tiene', edadHermano1, 'años,\n y es',
                 edadHermano1 - edadHermano2, 'años mayor que su hermano');
    } else if (edadHermano2 > edadHermano1) {
        console.log('El hermano mayor tiene', edadHermano2, 'años');
        console.log('y es', edadHermano2 - edadHermano1, 'años mayor que su hermano');
        } else {
            console.log('Ambos hermanos tienen la misma edad,', edadHermano1, 'años');
            }
