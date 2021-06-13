class Perro {
    constructor(paNombre, paRaza, paTalla) {
        this.nombre = paNombre;
        this.raza = paRaza;
        this.talla = paTalla;
    }
    
    ladrar() {
        if (this.talla >= 50) {
            console.log('El', this.raza, 'llamado', this.nombre, 'y de talla', this.talla, 'ladra ¡muu!¡muu!');
        } else if (this.talla >= 35) {
            console.log('El', this.raza, 'llamado', this.nombre, 'y de talla', this.talla, 'ladra ¡guauu!¡guauu!');
        } else if (this.talla >= 20) {
            console.log('El', this.raza, 'llamado', this.nombre, 'y de talla', this.talla, 'ladra ¡ufff!¡ufff!');
        } else if (this.talla >= 8) {
            console.log('El', this.raza, 'llamado', this.nombre, 'y de talla', this.talla, 'ladra ¡quack!¡quack!');
        } else {
            console.log('El', this.raza, 'llamado', this.nombre, 'y de talla', this.talla, 'ladra ¡pio!¡pio!');
        }
    }
}

let perrito1 = new Perro('Toto', 'labrador', 2);

while (perrito1.talla < 60) {
    perrito1.talla += 5;
    perrito1.ladrar();
}
