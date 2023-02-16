const expressLoader = require('./express');
const mongodbLoader = require('./mongodb');
const smtpLoader = require('./smtp');

function init(app, config) {
  expressLoader(app);
  smtpLoader(config.smtp);
  mongodbLoader(config.mongodb);
}

module.exports = {
  init,
};
