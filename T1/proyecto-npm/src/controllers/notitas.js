const fs = require('fs');
const { logger } = require('../utils');

const notaServices = require('../services/notitas');

function showNotes(req, res) {
  const files = fs.readdirSync('./');
  logger.info('NOTAS MOSTRADAS');
  return res.status(200).send(files);
}

function createNote(req, res) {
  const { name, content } = req.body;
  const crearNota = notaServices.createNote(name, content);
  logger.info('NOTA CREADA');
  return res.status(200).send( crearNota );
}

function editeNote(req, res) {
  const { name } = req.params;
  const { content } = req.body;
  const editarNota = notaServices.editeNote(name, content);
  logger.info('NOTA EDITADA');
  return res.status(200).send( editarNota );
}

function deleteNote(req, res) {
  const { name } = req.params;
  const eliminarNota = notaServices.deleteNote(name);
  logger.info('NOTA ELIMINADA');
  return res.status(200).send(eliminarNota);
}

module.exports = {
  showNotes,
  createNote,
  editeNote,
  deleteNote,
};
