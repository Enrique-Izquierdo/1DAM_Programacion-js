class Persona {
    constructor(paNombre, paSexo, paEdad, paPeso, paAltura){
        this.nombre = paNombre;
        this.sexo = paSexo.toUpperCase();
        this.dni = this.generaNIF();
        this.edad = paEdad;
        this.peso = paPeso;
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
        return numDni+letra[numDni%23];
    }
}

const RLSYNC = require('readline-sync');
let vNombre, vSexo, vEdad, vPeso, vAltura;

do {
    vNombre = RLSYNC.question('Introduce el nombre de una persona o, la palabra FINALIZAR para salir del programa: ');
    if (vNombre.toUpperCase() !=  'FINALIZAR') {
        vSexo = RLSYNC.keyIn('Introduce H si es hombre o, M si es mujer: ', {limit:'HM'});
        vEdad = RLSYNC.questionInt('Dame la edad en anyos: ');
        vPeso = RLSYNC.questionInt('Dame el peso en kg: ');
        vAltura = RLSYNC.questionFloat('Dame altura en metros:');
        let pers1 = new Persona(vNombre, vSexo, vEdad, vPeso, vAltura);
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

} while (vNombre.toUpperCase() != 'FINALIZAR')