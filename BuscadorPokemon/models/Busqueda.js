const axios = require('axios');

class Busquedas {
    historial = ['aaaa','bbbb','cccc'];
    db = './db/database.json';

    constructor(){

    }

    async pokemon(poke = ''){
        // peticion http

        try{
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokedex/1/`);
            console.log(resp.data.pokemon_entries);
        }catch(error){
            return [];
        }
    }




    /*
    async pokemon(poke = ''){
        // peticion http
        //console.log(lugar);
        
        try{
            const istance = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokedex/1/`,
                
            }) ;

            const resp = await istance.get(`${ poke }.json`);
            return resp.data.map(poke => ({
                id: poke.pokemon_entries.entry_number,
                nombre:poke.pokemon_entries.pokemon_species.name,
                //url: poke.url,
            }));
        }
        
        catch(error){
            return [];
        }

        //return []; // retornar los lugares que coincidan
    }
    */
    

}


module.exports = 
Busquedas;

