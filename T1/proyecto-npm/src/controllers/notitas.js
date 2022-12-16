const fs = require('fs');
const { logger } = require('../utils');

function createNote(req, res){
  const {name, content} = req.body;
  fs.writeFileSync(`${name}.note`, data);
  res.status(200);
}

function editeNote(req, res){
  const {name}= req.params;
  const{content}= req.body;
  fs.writeFileSync(`${name}.note`, data);
  res.status(200);
}

function deleteNote(req, res){
  const { name } = req.params;
  fs.unlink(`${name}.note`);
  res.status(200);
}

module.exports = {
  createNote,
  editeNote,
  deleteNote,
};
