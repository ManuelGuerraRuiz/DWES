import fs from 'fs';

let nombre = process.argv[2];

fs.writeFile(`./files/${nombre}.js`, '',function(err){
    if (err) throw err;
    console.log('Archivo Creado Correctamente');
});