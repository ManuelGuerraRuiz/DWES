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

async function createRam(req, res, next) {
    try {
      const createdRam = await componenteService.createRam(req.body)
      res.status(201).send(createdRam);
      logger.info('Ram creada');
    } catch (error) {
      error.status = 409;
      next(error);
    }
}

async function createGrafica(req, res, next) {
    try {
      const createdGrafica = await componenteService.createGrafica(req.body)
      res.status(201).send(createdGrafica);
      logger.info('Grafica creada');
    } catch (error) {
      error.status = 409;
      next(error);
    }
}

async function createDiscoDuro(req, res, next) {
    try {
      const createdDiscoDuro= await componenteService.createDiscoDuro(req.body)
      res.status(201).send(createdDiscoDuro);
      logger.info('Disco duro creado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
}

async function createRefrigeracion(req, res, next) {
    try {
      const createdRefrigeracion= await componenteService.createRefrigeracion(req.body)
      res.status(201).send(createdRefrigeracion);
      logger.info('Refrigeracion creada');
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
    createRam,
    createDiscoDuro,
    createGrafica,
    createRefrigeracion,
    getComponentes, 
}; 