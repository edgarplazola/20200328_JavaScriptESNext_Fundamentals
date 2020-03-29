let a = 10;

if (a >= 10) {
    console.log('a >= 10');
} else {
    console.log('a < 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else {
    console.log('No es Domingo');
}

//Obtener dia de la semana sin usar estructuras de control, solamente objetos literales

const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

console.log(dias[dia]);