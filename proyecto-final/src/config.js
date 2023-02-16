require('dotenv').config();

const port = 3000;

const app = {
    port: process.env.PORT,
  };
  
  const smtp = {
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    clientId: process.env.GMAIL_CLIENT_ID,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
    authUrl: 'https://developers.google.com/oauthplayground',
  };

  const mongodb = { 
    user: process.env.DATABASE_USER , 
    pass: process.env.DATABASE_PASS, 
  
  }
  
  module.exports = {
    port,
    app,
    smtp,
    mongodb,
  };