const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
        {
            value: 1,
            name: `${'1.'.green} Buscar pokemon`,
        },
        {
            value: 2,
            name: `${'2.'.green} Historial`
        },
        {
            value: 3,
            name: `${'3.'.green} crear equipo`
        },
        {
            value: 4,
            name: `${'4.'.green} Equipos creados`
        },
        {
            value: 5,
            name: `${'5.'.green} Eliminar equipos`
        },
        {
            value: 6,
            name: `${'6.'.green} Salir`
        }

        ]
    }

];

const inquirerMenu = async() => {
    
    
    console.clear();
    console.log('============================'.green);
    console.log('   Seleccione una opcion '.white);
    console.log('============================\n'.green);

   const {opcion} = await inquirer.prompt(preguntas)

   return opcion;
}


const Pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];

    await inquirer.prompt(question);
}

const leerInput = async( message) => {

    const question = [

        {
            type: 'input',
            name: 'desc',
            message,
            validate (value) {
                if (value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }

    ];


    const {desc} = await inquirer.prompt(question);
    return desc;
}

const CrearEquipo = async( message) => {

    const question = [

        {
            type: 'confirm',
            name: 'desc',
            message: '¿Desea crear un equipo?:',
                
                
            
        }

    ];


    const {desc} = await inquirer.prompt(question);
    return desc;
}


const ConfirmarEquipo = async( message) => {

    const question = [

        {
            type: 'confirm',
            name: 'desc',
            message: '¿Desea agregar otro pokemon?:',
                
                
            
        }

    ];


    const {desc} = await inquirer.prompt(question);
    return desc;
}


const listadoEquipoBorrar = async(Equipos= []) => {

    const choices = Equipos.map((team,i) => {

        const idx = `${i + 1}.`.green;

        return{
            value:team.Id,
            name:`${idx} ${team.List}`
        }

    });

    const Preguntas = [
        {
            type:'list',
            name: 'id',
            message:'borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(Preguntas);
    return id;

}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    Pausa,
    inquirerMenu,
    leerInput,
    listadoEquipoBorrar,
    confirmar,
    CrearEquipo,
    ConfirmarEquipo
  
}


