class Persona {
    //? Propiedades estáticas, son propiedades que se pueden utilizar sin instanciar.
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }

    //? Atributos de la clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //? Método que se ejecuta exáctamente cuando se crea una instancia de persona.
    constructor(nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin frase') {
        //if (!nombre) throw Error('Necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //? Sets y Gets
    set setComidaFavorita(comida) {
        this.comida = comida;
    }
    get getComidaFavorita() {
        return this.comida;
    }

    //? Métodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo}: dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

console.log(spiderman);
console.log(`La comida favorita de ${spiderman.nombre} es: ${spiderman.getComidaFavorita}`);
console.log(`Conteo estático ${Persona._conteo}`)
console.log(Persona.conteo);
Persona.mensaje();