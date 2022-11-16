import express from 'express';

const server = express();

server.use('/static',express.static('user'));

server.get('/', (req, res) => {
    res.send('Que pasa paco')
})

server.post('/', (req, res) => {
    res.send('Que pasa paco POST')
})

server.put('/user',  (req, res) => {
    res.send('Esto es un PUT desde /user');
  });

server.delete('/user',  (req, res) => {
    res.send('Esto es un DELETE desde /user');
  });
  
server.listen(3000,() =>{
    console.log(`Server esta escuchando en el http://localhost:3000`);
})
