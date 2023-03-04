const { Componente, PlacaBase, Procesador } = require("../../models/componente");

async function createPlacaBase(body) {
    const createdPlacaBase = await new PlacaBase(body).save();
    return createdPlacaBase;
  }

  function getAllComponentes(filters) {
    return Componente.find(filters)
  }  

  module.exports = {
    createPlacaBase,
    getAllComponentes
  };
  