const userService = require('../services/mongodb-service/user');
const { logger } = require('../utils');

async function getUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    logger.info('Usuarios mostrados');
    return res.status(201).send(users);
  } catch (error) {
    logger.error('Usuarios no encontrados');
    return next(error);
  }
}

async function createUser(req, res, next) {
    try {
      const createdUser = await userService.createUser(req.body)
      res.status(201).send(createdUser);
      logger.info('Usuario creado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }


  async function editUser(req, res, next) {
    try {
      const editedUser = await userService.editUser(req.body)
      res.status(200).send(editedUser);
      logger.info('Usuario editado');
    } catch (error) {
      error.status = 409;
      next(error);
    }
  }

  async function deleteUser(req, res, next) {
    try {
      const deletedUser = await userService.deleteUser(req.params.email);
      res.status(200).send(deletedUser);
      logger.info('Usuario eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Usuario no encontrado');
      next(error);
    }
  }

module.exports = {
    createUser,
    deleteUser,
    editUser, 
    getUsers, 
}; 