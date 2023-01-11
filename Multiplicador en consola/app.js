const argv  = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('./config/yargs');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creando'))
   .catch( err => console.log (err));  