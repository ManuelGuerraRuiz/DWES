const { Ordenador } = require("../../models");

function getAllOrdenadores(filters) {
  return Ordenador.find(filters);
}

async function findAllOrdenadores(filters) {
  return Ordenador.find(filters);
}

async function createOrdenador(body) {
  const createdOrdenador = await new Ordenador(body).save();
  return createdOrdenador;
}

async function editOrdenador(body) {
  const { referencia, ...datosParaActualizar } = body;
  const ordenadorActualizado = await Ordenador.findOneAndUpdate(
    { referencia },
    datosParaActualizar
  );
  return ordenadorActualizado;
}

async function deleteOrdenador(referencia) {
  const filter = { referencia: referencia };
  const deletedOrdenador = await Ordenador.deleteOne(filter);
  if (!deletedOrdenador) {
    const error = new Error(`Ordenador with referencia ${referencia} not found`);
    error.statusCode = 404;
    throw error;
  }
  return deletedOrdenador;
}

module.exports = {
  findAllOrdenadores,
  createOrdenador,
  getAllOrdenadores,
  editOrdenador,
  deleteOrdenador,
};
