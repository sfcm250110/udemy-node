const { crearArchivo } = require('./helpers/multiplicar');
const base = 6;

console.clear();

crearArchivo(base)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));