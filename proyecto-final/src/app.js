const express = require('express');
const loaders = require('./loaders');
const config = require('./config');
const cors = require('cors');

const app = express();

app.use(cors());

loaders.init(app, config);

module.exports = app;