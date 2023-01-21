const inquirer = require('inquirer');
const { pausa } = require('./mensajes');
const tareas = require('../models/tareas');
require('colors');

const Preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer',
        choices: [
        
        {
            value: '1',
            name: `${'1'.green}.Crear Tarea`
        },
        {
            value:'2',
            name:`${'2'.green}.Listar Tareas`
        },
    
        {
            value:'3',
            name:`${'3'.green}.Listar Tareas Completadas`
        },
    
        {
            value:'4',
            name:`${'4'.green}.Listar Tareas pendientes`
        },
    
        {
            value:'5',
            name:`${'5'.green}.Completar Tarea(s)`
        },
    
        {
            value:'6',
            name:`${'6'.green}.Borrar Tarea(s)`
        },
        {
            value:'0',
            name: `${'0'.green}.Salir`
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

const Pausa = async() => {

    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ];

    console.log('\n');

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


const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea,i) => {

        const idx = `${i + 1}.`.green;

        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`
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


const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea,i) => {

        const idx = `${i + 1}.`.green;

        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }

    });

    const Pregunta = [
        {
            type:'checkbox',
            name: 'ids',
            message:'seleccione',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(Pregunta);
    return ids;

}



module.exports = {
    inquirerMenu,
    Pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}