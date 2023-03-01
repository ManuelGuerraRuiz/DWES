const { Ordenador } = require('../../models');

function getAllOrdenadores(filters) {
  return Ordenador.find(filters);
}

async function findAllOrdenadores(filters){
    return Ordenador.find(filters);
}


async function createOrdenador(body) {
    const createdOrdenador = await new Ordenador(body).save();
    return createdOrdenador;
  }


module.exports = {
    findAllOrdenadores,
    createOrdenador,
    getAllOrdenadores,
     
}