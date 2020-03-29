//? Los objetos literales son objetos que tienen pares de valores y llaves
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 24.034,
        lng: -118.70
    },
    trajes: ['Mark1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'Malibu, California',
    }
};
console.log(personaje)
console.log(`Nombre: ${personaje.nombre}`);
console.log(`Nombre: ${personaje['nombre']}`);
console.log(`Personaje: ${personaje.edad}`);
console.log(`Coordenadas: ${personaje.coords}`);
console.log(`Latitud: ${personaje.coords.lat}`);
console.log(`Número de trajes: ${personaje.trajes.length}`);
console.log(`Último traje: ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = 'vivo';
console.log(`Vivo: ${personaje[x]}`);

//TODO: Más detalles

//Borrar una propiedad

delete personaje.edad;
console.log(personaje);

//Agregar propiedades
personaje.casado = true;

//Convertir a pares de valores

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//? Para hacer un objeto inmutable hay que utilizar freeze
//? Nota, se podrán cambiar las propiedades de los sub objetos

Object.freeze(personaje);

personaje.dinero = 100000000000000; //esta propiedad no se añadira debido a que el objeto se encuentra en freeze
personaje.casado = false;
console.log(personaje);

//? Como sabes las propiedades y valores que tienen los objetos
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({ propiedades });

const valores = Object.values(personaje);
console.log({ valores });

//? Para mas información de objetos sigue esta liga: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object
