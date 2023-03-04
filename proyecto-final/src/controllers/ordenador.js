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

  async function editOrdenador(req, res, next) {
    try {
      const editedOrdenador = await ordenadorService.editOrdenador(req.body)
      res.status(200).send(editedOrdenador);
      logger.info('Ordenador editado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }

  async function deleteOrdenador(req, res, next) {
    try {
      const deletedOrdenador = await ordenadorService.deleteOrdenador(req.params.referencia);
      res.status(200).send(deletedOrdenador);
      logger.info('Ordenador eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Ordenador no encontrado');
      next(error);
    }
  }


module.exports = {
    createOrdenador, 
    getOrdenadores,
    editOrdenador,
    deleteOrdenador 
}; 