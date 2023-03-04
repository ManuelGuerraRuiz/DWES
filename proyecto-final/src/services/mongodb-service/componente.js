const {
  Componente,
  PlacaBase,
  Procesador,
} = require("../../models/componente");

async function createPlacaBase(body) {
  const createdPlacaBase = await new PlacaBase(body).save();
  return createdPlacaBase;
}

async function createProcesador(body) {
  const createdProcesador = await new Procesador(body).save();
  return createdProcesador;
}

function getAllComponentes(filters) {
  return Componente.find(filters);
}

module.exports = {
  createPlacaBase,
  createProcesador,
  getAllComponentes,
};
