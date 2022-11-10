const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');

const files = fs.readdirSync('./');

const opcion = process.argv[2];
if (opcion === '1' || opcion === '2' || opcion === '3' || opcion === '4') {
  // eslint-disable-next-line default-case
  switch (opcion) {
    case '1':
      console.log('Creando Nota');

      rl.question('Nombre del nuevo archivo: ', nombre => {
        rl.question('Contenido del archivo: ', textito => {
          fs.writeFile(`${nombre}.note`, textito, err => {
            if (err) throw err;
            console.log('Se ha creado correctamente');
          });

          rl.close();
        });
      });
      break;
    case '2':
      console.log('Muestro todas las notas:');

      console.log(files);

      rl.question('Escriba  el archivo que quieras editar: ', archivo => {
        console.log('Contenido del archivo\n');

        try {
          const data = fs.readFileSync(archivo, 'utf8');
          console.log(`${data}\n\n`);
        } catch (err) {
          err.mensaje = 'NO EXISTE EL ARCHIVO';
          console.error(err);
        }

        rl.question('Escriba lo que quieres editar: ', editado => {
          fs.writeFile(archivo, editado, err => {
            if (err) throw err;
            console.log('Archivo Editado Con Exito ');
          });

          rl.close();
        });
      });

      break;
    case '3':
      console.log('Muestro todas las notas:');

      console.log(files);

      rl.question('Elija el archivo que quieras borrar: ', borrar => {
        fs.unlink(borrar, err => {
          if (err) throw err;
          console.log('Archivo borrado');

          rl.close();
        });
      });

      break;
    case '4':
      rl.close();
  }
}
