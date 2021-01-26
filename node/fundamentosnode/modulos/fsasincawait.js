const fs = require('fs');

async function leer(ruta) {
    return new Promise(function (resolve, reject)  {
        fs.readFile(ruta, (err, data) => {
            resolve(data.toString());
        });
    });
};

function escribir(ruta, contenido) {
    return new Promise(function(resolve,reject) {
        fs.writeFile(ruta, contenido, function (err) {
            if (err) {
                reject('No he podido escribirlo');
            } else {
                resolve('Se ha escrito correctamente');
            }
        });
    });
}


async function borrar(ruta) {
    return new Promise(function(resolve, reject) {
            fs.unlink(ruta, function(err) {
                if(err) reject(`Error Borrando archivo ${ruta}`);
                resolve('Archivo Borrado con Exito');
            });
        });
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
async function main() {
    try {
        console.log('leyendo archivo.txt');
        const result = await leer(__dirname + '/archivo.txt');
        console.log(result);
        console.log('Terminó leyendo archivo.txt');
        console.log('Escribiendo en  archivo1.txt');
        const result1 = await escribir(__dirname + '/archivo1.txt','Esta es la nueva linea');
        console.log(result1);
        console.log('Terminó Escribiendo en  archivo1.txt');
        const result2 = await leer(__dirname + '/archivo1.txt');
        console.log(result2);
        const result3 = await borrar(__dirname + '/archivo3.txt');
        console.log(result3);
     } catch(err){
         console.log(err);
     }

}

main();
