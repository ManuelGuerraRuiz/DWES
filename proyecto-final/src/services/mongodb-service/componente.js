const {
  Componente,
  PlacaBase,
  Procesador,
  Ram,
  Grafica,
  Refrigeracion,
  DiscoDuro
} = require("../../models/componente");

async function createPlacaBase(body) {
  const createdPlacaBase = await new PlacaBase(body).save();
  return createdPlacaBase;
}

async function createProcesador(body) {
  const createdProcesador = await new Procesador(body).save();
  return createdProcesador;
}

async function createRam(body) {
  const createdRam = await new Ram(body).save();
  return createdRam;
}

async function createRefrigeracion(body) {
  const createdRefrigeracion = await new Refrigeracion(body).save();
  return createdRefrigeracion;
}

async function createDiscoDuro(body) {
  const createdDiscoDuro = await new DiscoDuro(body).save();
  return createdDiscoDuro;
}

async function createGrafica(body) {
  const createdGrafica = await new Grafica(body).save();
  return createdGrafica;
}

function getAllComponentes(filters) {
  return Componente.find(filters);
}

module.exports = {
  createPlacaBase,
  createProcesador,
  createRam,
  createGrafica,
  createDiscoDuro,
  createRefrigeracion,
  getAllComponentes,
};
