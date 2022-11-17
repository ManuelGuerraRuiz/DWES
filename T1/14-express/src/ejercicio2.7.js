import express from 'express';

const app = express()
const port = 3000

function fizzbuzz(n) {
    const secuencia = [];
  
    for (let x = 1; n >= x; x++) {
  
      if ( x%3 === 0 && x%5 === 0) {
        secuencia.push('fizzbuzz');
      } else if (x%3 === 0) {
        secuencia.push('fizz');
      } else if(x%5 === 0) {
        secuencia.push('buzz');
      } else {
        secuencia.push(x);
      }
  }  
  
    return secuencia;
}

app.get('/:n', (req, res) => {
   
  const n = req.params.n;
    res.send(`${fizzbuzz(n)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})