import express from 'express';
import * as fs from 'fs';

const pagina = fs.readFileSync('Ejercicio Cajas 1.html');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(pagina)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})