import express from 'express';

const app = express()
const port = 3000


app.get('/:name', (req, res) => {
   
  const name = req.params.name;
    res.send(`Hello ${name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})