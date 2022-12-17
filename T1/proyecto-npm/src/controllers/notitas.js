const fs = require('fs');
const { logger } = require('../utils');

const notaServices = require('../services/notitas');

function createNote(req, res) {
  const { name, content } = req.body;
  const crearNota = notaServices.createNote(name, content);
  return res.status(200).send( crearNota );
}

function editeNote(req, res) {
  const { name } = req.params;
  const { content } = req.body;
  const editarNota = notaServices.editeNote(name, content);
  return res.status(200).send( editarNota );
}

function deleteNote(req, res) {
  const { name } = req.params;
  const eliminarNota = notaServices.deleteNote(name);
  return res.status(200).send(eliminarNota);
}

module.exports = {
  createNote,
  editeNote,
  deleteNote,
};
