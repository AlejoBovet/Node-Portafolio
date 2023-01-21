require('colors');

const {inquirerMenu, Pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer');
const {Tareas} = require('./models/tareas'); 
const {Tarea} = require('./models/tarea'); 
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { pausa } = require('./helpers/mensajes');


console.clear();
const main = async() => {
    

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        //cargar tareas 
        tareas.cargarTareasFromArray(tareasDB);
    }
    

    do{
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt){

            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);

                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.togglecompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('¿Esta seguro de borrar?')
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('tarea borrada')
                }
                break;

          

        }
        
        guardarDB( tareas.listadoArr );

        await Pausa();
  
    }while(opt !=='0');

    //pausa();
}

main();