//const Busquedas = require('./models/busquedas');
const { inquirerMenu,Pausa,leerInput} = require('./helpers/inquirer');
const Busquedas = require('./models/Busqueda');

const main  = async () => {
    
    const busqueda = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){

            case 1:

            const valor = await leerInput('pokemon: ');
            //console.log(pokemon);
            const poket = await busqueda.pokemon(valor);
                
            console.log('\nPokemones\n'.green);
            console.log('Numero',poket.id);
            console.log('Nombre',poket.nombre);


                
            
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

        if( opt !== 6) await Pausa();

    }while (opt !== 6)
}

main();