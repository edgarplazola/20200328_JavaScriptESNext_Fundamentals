const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!regresaFalse());

console.warn('And'); //true si todos los operadores son verdaderos
console.log(true && true);
console.log(true && false);

console.warn('OR');
console.log(true || false);
console.log(false || false);
