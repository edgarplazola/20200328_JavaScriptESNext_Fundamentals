//Todos los primitivos se cambian por valor
let a = 10, b = a;
a = 30;

console.log({ a, b });

//Todos los objetos se pasan por referencia
let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';
console.log({ juan, ana })

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });