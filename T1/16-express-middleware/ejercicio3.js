import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/*', function (req, res) {
  res.send('Hola pequeño Morgan!')
});

app.listen(3000);