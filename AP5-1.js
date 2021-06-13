class Persona {
    constructor(pNombre, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
        if (this.edad >= 67) {
            this.jubilado = true;
        } else {
            this.jubilado = false;
        }
    }
    cumplirAnyos() {
        this.edad++;
        console.log(this.nombre, 'cumplio', this.edad, 'anyos');
        if (this.edad == 67 && !this.jubilado) {
            this.jubilado = true;
            console.log('¡¡Enhorabuena, ' + this.nombre + '!!' + ' Te acabas de jubilar.');
        }
    }
}

let pers1 = new Persona("Pepe", 65);

while (pers1.edad < 68){
    pers1.cumplirAnyos();
}