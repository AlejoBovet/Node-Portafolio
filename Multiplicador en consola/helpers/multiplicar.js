const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = true, limite = 10 ) => {

    try{

      
    
        let salida, sconsola = '';
    
        for (let i =1; i<=limite; i++){
            sconsola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        if(listar){
        console.log('=============='.green)
        console.log('Tabla del:'.green, colors.blue (base))
        console.log('=============='.green)
        console.log(sconsola);
    }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
        return(`tabla-${base}.txt creado`);

    }catch(err){
        throw err;
    }


    

    

   

}

module.exports = {
    crearArchivo
}