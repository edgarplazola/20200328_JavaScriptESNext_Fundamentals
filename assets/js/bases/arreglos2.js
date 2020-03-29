let juegos = ['Zelda', 'Mario', 'Metroid', 'Metal Slug', 'Metal Gear'];
console.log(`Largo: ${juegos.length}`);

let primero = juegos[0];
console.log(`Primero: ${primero}`);
let ultimo = juegos[juegos.length - 1];
console.log(`Último: ${ultimo}`);

//Recorrer un arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});

//Agregar un nuevo Elemento al final del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

//Agregar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Crash Bandicoot');
console.log({ nuevaLongitud, juegos });

//Eliminar el último elemento de un arreglo
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


//Borrar elemento en una posición en específico
let position = 1;
let juegosBorrados = juegos.splice(position, 2);
console.log({ juegosBorrados, juegos });

//Saber en que lugar se encuentra un item
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex,juegos});

//TODO Pasar valores por referencia