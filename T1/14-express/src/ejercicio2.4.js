import express from 'express';

const app = express()
const port = 3000

app.get('/page', (req, res) => {
  res.send('<html><body><h1>Hello World!</h1></body></html>')
})

app.get('/error', (req, res) => {
    res.status(404).send('Error 404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})