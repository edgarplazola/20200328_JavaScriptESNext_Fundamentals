//? Un singleton es una instancia única de una clase que siempre va a regresar la misma instancia de mi clase.
//? Es útil para compartir información en toda la app y es útil en servicios.
//? Nos ayuda a ahorrar memoria.

class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor(nombre = '') {
        // if para saber si está vacía la instancia
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);