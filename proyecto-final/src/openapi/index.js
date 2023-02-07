const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const pathFile = path.resolve(__dirname, 'paths.yml');
const schemasFile = path.resolve(__dirname, 'schemas.yml');
const pathD = yaml.load(fs.readFileSync(pathFile, 'utf8'));
const schemas = yaml.load(fs.readFileSync(schemasFile, 'utf8'));

module.exports = {
  openapi: '3.0.3',
  info: {
    version: '0.0.1',
    title: 'Mi editor API',
    description: 'RESTFull API for editor notes',
    termsOfService: 'http://swagger.io/terms/',
  },
  servers: [{ url: 'http://localhost:3000/' }],
  paths: pathD,
  components: {
    schemas,
  },
};