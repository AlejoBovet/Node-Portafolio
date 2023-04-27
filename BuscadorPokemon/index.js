require('colors');
const { inquirerMenu,Pausa,leerInput,inquirertems} = require('./helpers/inquirer');
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
            
            

            busqueda.agregarHistorial( poket.name );


                
            break;

            case 2:
            
            busqueda.historial.forEach((poke,i) =>{
                const idx =`${i+1}`.green;
                console.log(`${idx} ${poke}`);
            })
            
            break;

            case 3:
             
            const question = await leerInput('¿Desea crear equipo pokemon? (s/n):');
            let teams = [];
            
            while(question === 's'){
                
                
                //const nombre = await leerInput('Nombre del equipo: ');
                const Searchpokemon = await  leerInput('Nombre del pokemon: ');
                const pokemon = await busqueda.poketeam(Searchpokemon);
                //console.log(pokemon.name);
                teams.push(pokemon.name);
                console.log(teams);
                

                const question2 = await leerInput('¿Desea agregar otro pokemon? (s/n):');
                if(question2 === 'n'){
                    break        
                
            }}

            busqueda.equipo(teams);
                



            break;

            case 4:
                busqueda.Equipos.forEach((poke,i) =>{
                    const idx =`${i+1}`.green;
                    console.log(`${idx} ${poke}`);
                })
            break;  

            case 5:

            
             
            break;

        }

        if( opt !== 6) await Pausa();

    }while (opt !== 6)
}

main();