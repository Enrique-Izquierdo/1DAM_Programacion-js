class Persona {
    constructor(paNombre, paSexo, paEdad, paAltura){
        this.nombre = paNombre;
        this.sexo = paSexo;
        this.dni = this.generaNIF();
        this.edad = paEdad;
        this.altura = paAltura;
    }

    calcularIMC() {
        let imc = this.peso/this.altura**2;
        if (imc < 18.5) {
            console.log(this.nombre, 'tiene un peso bajo.');
        } else if (imc < 25) {
            console.log(this.nombre, 'tiene un peso normal.');
        } else {
            console.log(this.nombre, 'tiene sobrepeso.');
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    comprobarSexo(sex) {
        if (sex == this.sexo) {
            console.log('Correcto,', this.nombre, 'es', this.sexo);
        } else {
            console.log('Incorrecto, ' + this.nombre + ' no es ' + sex + ', es' + this.sexo);
        }
    }

    informa() {
        console.log('nombre:', this.nombre, '\tDNI:', this.dni, '\nedad:', this.edad, '\tsexo:', this.sexo, '\npeso:', this.peso, '\taltura:', this.altura);
    }

    generaNIF() {
        let letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
        let numDni = Math.trunc(Math.random()*100000000);
        let posicion = Math.trunc(numDni/23);
        let letraNif = letra[posicion];
        return numDni+letraNif;
    }
}

const RLSYNC = require('readline-sync');
let pers1 = new Persona();

do {
    pers1.nombre = RLSYNC.question('Introduce el nombre de una persona o, la palabra FINALIZAR para salir del programa: ');
    if (pers1.nombre.toUpperCase() !=  'FINALIZAR') {
        pers1.sexo = RLSYNC.keyIn('Introduce H si es hombre o, M si es mujer: ', {limit:'HM'});
        pers1.edad = RLSYNC.questionInt('Dame la edad en anyos: ');
        pers1.peso = RLSYNC.questionInt('Dame el peso en kg: ');
        pers1.altura = RLSYNC.questionFloat('Dame altura en metros:');
        console.log('');
        pers1.informa();
        console.log('');
        pers1.calcularIMC();
        if (pers1.esMayorDeEdad()) {
            console.log(pers1.nombre, 'es mayor de edad');
        } else {
            console.log(pers1.nombre, 'es menor de edad');
        }
        console.log('');
    }

} while (pers1.nombre.toUpperCase() != 'FINALIZAR')