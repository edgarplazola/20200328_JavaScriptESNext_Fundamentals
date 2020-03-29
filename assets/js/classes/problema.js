// const persona = {
//     nombre: 'Edgar',
//     edad: 28
// }

// Clases hace muchos años tienen el problema de que se debe de instanciar forzosamente con la palabra New
function Persona(nombre, edad) {

    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log('Hola, soy' + nombre);
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir();