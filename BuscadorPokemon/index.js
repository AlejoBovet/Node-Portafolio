//const Busquedas = require('./models/busquedas');
const { inquirerMenu} = require('./helpers/inquirer');

const main  = async () => {
    //const busqueda = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){

            case 1:
                // Mostrar mensaje
                
            
            break;

            case 2:
                // Mostrar mensaje
            break;

            case 3:
                // Mostrar mensaje
            break;

            case 4:
                // Mostrar mensaje
            break;  

        }

        //if( opt !== 0 ) await Pausa();

    }while (opt !== 0)
}

main();