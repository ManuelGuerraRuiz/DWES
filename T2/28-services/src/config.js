

const fs = require('fs');

const app = {
    port: process.env.PORT,
};

const smtp = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT,10),
};

const config = {
    app,
    smtp,
};

module.exports = config;