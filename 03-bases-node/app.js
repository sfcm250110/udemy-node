const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo(base,listar,hasta)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));