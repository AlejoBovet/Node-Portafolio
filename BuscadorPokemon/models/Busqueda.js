const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');

class Busquedas {
    historial = [];
    Equipos = [];
    dbPath = './db/database.json';


    constructor(){

        this.leerDB();

    }
    
    async pokemon(poke = ''){
        
    
        
        try{

        
            const istance = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokemon/`
                
            }) ;

            const resp = await istance.get(`${ poke }/`);
            const search =resp.data;
            if(search){
                console.log('Nombre: ',search.name);
                console.log('');
                console.log('id: ',search.order);
                console.log('');
                console.log('Tipo: ',search.types[0].type.name);
                console.log('');
                console.log('Peso: ',search.weight);
                console.log('');
                console.log('Altura: ',search.height);
                console.log('');
                console.log('Pasivas: ');
                search.abilities.forEach((element,index) => {
                    if(index < 10){
                        console.log(element.ability.name);
                    }});
                console.log('');
                console.log('Skills: ');
                search.moves.forEach((element,index) => {
                    if(index < 10){
                        console.log('\n',element.move.name);
                    }
                }); 
            }
          
            
        }
        catch(error){
            console.log('No se encontro el pokemon');
            console.log('intente de nuevo');
            return [];
        }
            
    
    }

        

        
    



    async poketeam(poke = ''){

        try{
            const istance = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokemon/`
            });

            const resp = await istance.get(`${ poke }`);
            const extract = resp.data;
            
            return{
                name: extract.name,
            }



        }
        catch(error){
            console.log('No se encontro el pokemon');
            return [];
        }
    }


    async equipo(miembros){

        
        this.Equipos.push(miembros);

        console.log(this.Equipos);

    }
    




    agregarHistorial(poke=''){

        //Prevenir duplicado 

        if(this.historial.includes(poke.toLocaleLowerCase())){
            return;
        }

        this.historial = this.historial.splice(0,10);

        this.historial.unshift(poke.toLocaleLowerCase());

        

        this.guardarDB();

    }

    guardarDB(){

        const payload ={
            historial:this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));

    }

    leerDB(){

        //debe de existir...
        if(fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.dewdewdwed(info);

        this.historial = data.historial;

    }
    
    

}


module.exports = 
Busquedas;

