const componenteService = require('../services/mongodb-service/componente');
const { logger } = require('../utils');


async function createPlacaBase(req, res, next) {
    try {
      const createdPlacaBase = await componenteService.createPlacaBase(req.body)
      res.status(201).send(createdPlacaBase);
      logger.info('Placa Base creada');
    } catch (error) {
      error.status = 409;
      next(error);
    }
}

async function createProcesador(req, res, next) {
    try {
      const createdProcesador = await componenteService.createProcesador(req.body)
      res.status(201).send(createdProcesador);
      logger.info('Procesador creado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
}

async function getComponentes(req, res, next) {
    try {
      const componentes = await componenteService.getAllComponentes();
      logger.info('Componentes mostradas');
      return res.status(201).send(componentes);
    } catch (error) {
      logger.error('Facturas no encontrados');
      return next(error);
    }
  }

  module.exports = {
    createPlacaBase,
    createProcesador,
    getComponentes, 
}; 