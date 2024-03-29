require('colors');
const { inquirerMenu,Pausa,leerInput,listadoEquipoBorrar,confirmar,ConfirmarEquipo, CrearEquipo} = require('./helpers/inquirer');
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
             
            const question = await CrearEquipo();
            let teams = [];
            
            while(question){
                
                
                
                const Searchpokemon = await  leerInput('Nombre del pokemon: ');
                const pokemon = await busqueda.poketeam(Searchpokemon);
                if(pokemon !== ''){
                    
                    teams.push(pokemon);
                    console.log(teams);
                    busqueda.SetTeam(teams);
                    busqueda.guardarDB2(busqueda.listadoArr);
                }else{
                    console.log('No se encontro el pokemon');
                }
                
                const question2 = await ConfirmarEquipo();
                if(question2 === false){
                    break        
                
            }}

            
                



            break;

            case 4:

                busqueda.listadoCompleto();
                

             
            break;  

            case 5:

            const id = await listadoEquipoBorrar(busqueda.listadoArr);
            const ok = await confirmar('Esta seguro que desea borrar');
            if(ok){
                busqueda.borrarTeam(id);
                console.log('Equipo borrado')
            }



             
            break;

        }

        if( opt !== 6) await Pausa();

    }while (opt !== 6)
}

main();