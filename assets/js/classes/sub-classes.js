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

class Heroe extends Persona {
    clan;

    constructor(nombre, codigo, frase, clan = 'Sin clan') {
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'Los Avengers');

console.log(spiderman);
spiderman.quienSoy();