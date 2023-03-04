const facturaService = require('../services/mongodb-service/factura');
const { logger } = require('../utils');

async function getFacturas(req, res, next) {
  try {
    const facturas = await facturaService.getAllFacturas();
    logger.info('Facturas mostradas');
    return res.status(201).send(facturas);
  } catch (error) {
    logger.error('Facturas no encontrados');
    return next(error);
  }
}

async function createFactura(req, res, next) {
    try {
      const createdFactura = await facturaService.createFactura(req.body)
      res.status(201).send(createdFactura);
      logger.info('Factura creada');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }

  async function editFactura(req, res, next) {
    try {
      const editedFactura = await facturaService.editFactura(req.body)
      res.status(200).send(editedFactura);
      logger.info('Factura editada');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }

  async function deleteFactura(req, res, next) {
    try {
      const deletedFactura = await facturaService.deleteFactura(req.params.referencia);
      res.status(200).send(deletedFactura);
      logger.info('Factura eliminada');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Ordenador no encontrado');
      next(error);
    }
  }


module.exports = {
    createFactura, 
    getFacturas,
    editFactura,
    deleteFactura 
}; 