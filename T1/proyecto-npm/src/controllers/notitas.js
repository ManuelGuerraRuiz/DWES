const readline = require('readline');
const fs = require('fs');
const { logger } = require('../utils');

const files = fs.readdirSync('./');
const arg = process.argv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function crearNotas(req, res) {
  rl.question('¿Como se va llamar el archivo?\n\n', x => {
    rl.question('¿Que quieres introducir dentro del archivo?\n\n', y => {
      fs.writeFile(`${x}.txt`, y, err => {
        if (err) throw err;
        console.log('Archivo Creado con exito');
      });

      rl.close();
    });
  });
}

function editarNotas(req, res) {
  // eslint-disable-next-line no-shadow
  const files = fs.readdirSync('./');
  console.log(files);

  // eslint-disable-next-line no-undef
  rl.question('¿Que archivo quieres editar?\n\n', x => {
    console.log('El archivo contiene:\n\n');

    try {
      const data = fs.readFileSync(x, 'utf8');
      console.log(`${data}\n\n`);
    } catch (err) {
      console.error(err);
    }

    rl.question('¿Que deseas introducir para editar?\n\n', y => {
      fs.writeFile(x, y, err => {
        if (err) throw err;
        console.log('Archivo Editado!');
        console.log('\n\n');
        console.log('El archivo editado quedaria:\n\n');

        try {
          const data = fs.readFileSync(x, 'utf8');
          console.log(`${data}\n\n`);
        } catch (error) {
          console.error(error);
        }
      });

      rl.close();
    });
  });
}

function eliminarNotas(req, res) {
  // eslint-disable-next-line no-shadow
  const files = fs.readdirSync('./');
  console.log(files);

  rl.question('¿Que archivo quieres eliminar?\n\n', x => {
    fs.unlink(x, err => {
      if (err) throw err;
      console.log('\n');
      console.log('Archivo Borrado');
    });

    rl.close();
  });
}

module.exports = {
  crearNotas,
  editarNotas,
  eliminarNotas,
};
