function crearPersona(nombre, apellido) {
    //? no es necesario poner nombre:nombre si la llave y el valor se llaman igual
    return { nombre, apellido }
}

const persona = crearPersona('Edgar', 'Plazola');
console.log(persona);

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
console.log(crearPersona2('Juan', 'Pérez'));


function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Juanito', 'Hola');

//? operador rest
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(edad, args);
    return args;
}

//? Destructuración de propiedades
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(90, true, 22222, 'flecha', 'ola k ase');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Edgar', 'Plazola');
console.log(nuevoApellido);

//? Destructuración de argumentos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark1', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);