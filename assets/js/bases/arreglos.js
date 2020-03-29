
const arr = new Array(10);
console.log(arr);

const arr2 = [];
console.log(arr2);

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videojuegos });
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Edgar',
    1 + 4,
    function () { },
    () => { },
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]
];
console.log({ arregloCosas });
console.log(arregloCosas[0]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);