const express = require('express');
const cors = require('cors');
const server = require('./app');
const config = require('./config');
const { logger } = require('./utils');
const { port } = config;

server.use(cors());


server.listen(port, () => {
  logger.info(`Escuchando en el puertecito: ${port}`)
});