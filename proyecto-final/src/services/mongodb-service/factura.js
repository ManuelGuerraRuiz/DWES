const { Factura } = require("../../models");

function getAllFacturas(filters) {
  return Factura.find(filters).populate('user ordenador');
}

async function findAllFacturas(filters) {
  return Factura.find(filters);
}

async function createFactura(body) {
  const createdFactura = await new Factura(body).save();
  return createdFactura;
}

async function editFactura(body) {
  const { referencia, ...datosParaActualizar } = body;
  const facturaActualizado = await Factura.findOneAndUpdate(
    { referencia },
    datosParaActualizar
  );
  return facturaActualizado;
}

async function deleteFactura(referencia) {
  const filter = { referencia: referencia };
  const deletedFactura = await Factura.deleteOne(filter);
  if (!deletedFactura) {
    const error = new Error(`Factura with referencia ${referencia} not found`);
    error.statusCode = 404;
    throw error;
  }
  return deletedFactura;
}

module.exports = {
  findAllFacturas,
  createFactura,
  getAllFacturas,
  editFactura,
  deleteFactura,
};
