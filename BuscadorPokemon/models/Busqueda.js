const axios = require('axios');

class Busquedas {
    historial = ['aaaa','bbbb','cccc'];
    db = './db/database.json';

    constructor(){

    }

/*

    async pokemon(poke = ''){
        // peticion http

        try{
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}/`);
            console.log(resp.data);
        }catch(error){
            return [];
        }
    }

*/


    
    async pokemon(poke = ''){
        // peticion http
        //console.log(lugar);
        
        try{
            const istance = axios.create({
                baseURL: `https://pokeapi.co/api/v2/pokemon/`
                
            }) ;

            const resp = await istance.get(`${ poke }/`);
            const test = resp;
            console.log(test);
            //return resp.data.map()//(poke => ({
                
                //id: poke.order,
                //nombre:poke.name,
                //url: poke.url,
            //}))
            
        }
        
        catch(error){
            return [];
        }

        //return []; // retornar los lugares que coincidan
    }
    
    

}


module.exports = 
Busquedas;

