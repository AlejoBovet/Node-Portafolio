const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
        {
            value: '1',
            name: `${'1.'.green} Buscar pokemon`
        },
        {
            value: '2',
            name: `${'2.'.green} Historial`
        },
        {
            value: '3',
            name: `${'0.'.green} crear equipo`
        },
        {
            value: '4',
            name: `${'0.'.green} Equipos creados`
        },
        {
            value: '5',
            name: `${'0.'.green} Eliminar equipos`
        },
        {
            value: '6',
            name: `${'0.'.green} Salir`
        }

        ]
    }

];

const inquirerMenu = async() => {
    
    
    console.clear();
    console.log('============================'.green);
    console.log('   Seleccione una opcion '.white);
    console.log('============================\n'.green);

   const {opcion} = await inquirer.prompt(Preguntas)

   return opcion;
}

module.exports = {
    inquirerMenu
}


