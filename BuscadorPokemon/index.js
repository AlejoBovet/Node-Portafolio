require('colors');
const { inquirerMenu,Pausa,leerInput} = require('./helpers/inquirer');
const Busquedas = require('./models/Busqueda');

const main  = async () => {
    
    const busqueda = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){

            case 1:

            console.log(`Puede buscar por nombre o id`.blue);
            console.log(`El id esta ordenado por Pokedex nacional`.green);
            const valor = await leerInput('pokemon: ');
            
            const poket = await busqueda.pokemon(valor);

            busqueda.agregarHistorial( valor );


                
            break;

            case 2:
            
            busqueda.historial.forEach((poke,i) =>{
                const idx =`${i+1}`.green;
                console.log(`${idx} ${poke}`);
            })
            
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