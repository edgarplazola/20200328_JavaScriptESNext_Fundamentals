function saludar() {
    console.log('Hola Mundo');
}
saludar();

const saludar2 = function (nombre) {
    console.log(arguments);
    console.log(`Hola ${nombre}`);
}
saludar2('Edgar');
saludar2('Edgar', 'Plazola', 28, 'Masculino');

//? Funciones flecha
const saludarFlecha = (nombre) => {
    return 'Hola Flecha ' + nombre;
}
console.log(saludarFlecha('hellooooo'));

function sumar(a, b) {
    return a + b;
}

console.log(sumar(1, 3));

const sumar2 = (a, b) => a + b;
console.log(sumar2(10, 50));

const getAleatorio = () => Math.random();
console.log(getAleatorio());