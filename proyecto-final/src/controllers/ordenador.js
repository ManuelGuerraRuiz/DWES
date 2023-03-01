const ordenadorService = require('../services/mongodb-service/ordenador');
const { logger } = require('../utils');

async function getOrdenadores(req, res, next) {
  try {
    const ordenadores = await ordenadorService.getAllOrdenadores();
    logger.info('Ordenadores mostrados');
    return res.status(201).send(ordenadores);
  } catch (error) {
    logger.error('Ordenadores no encontrados');
    return next(error);
  }
}

async function createOrdenador(req, res, next) {
    try {
      const createdOrdenador = await ordenadorService.createOrdenador(req.body)
      res.status(201).send(createdOrdenador);
      logger.info('Ordenador creado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }



module.exports = {
    createOrdenador, 
    getOrdenadores, 
}; 