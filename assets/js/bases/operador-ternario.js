//================================
// ? Dias de semana abrimos a las 11
// Pero los fines de semana abrimos a las 9
//================================

const dia = 1; // 0: domingo... 1:Lunes...
const horaActual = 12;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día entre semana');
//     horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
// }
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : 'Esta cerrado, hoy abrimos a las ' + horaApertura
console.log({ horaApertura, mensaje });


//Operador ternario

