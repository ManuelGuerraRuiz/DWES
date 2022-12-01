import express from 'express';

 const server = express();
 const router = express.Router();
 const ob = {1:'valor',2:'valor',3:'valor'}
 const entradas = Object.entries(ob);
 let list = [];

 function listaHTML() {
    for (const key in entradas) {
      list.push(<li>${entradas[key]}</li>)
    }
  }
  
  listaHTML()

 function Sumando(n) {
    if (n === null) {
        n = 100;
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;
    } else {
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;
    }
}

 server.get('/header/:token',(req,res) => {
 const {token} = req.params;
 console.log(token);
 });

 server.get('/header/',(req, res) => {
    res.send({
        "code": 401,
        "error": "Not Found",
        "message": "Error: Set a token to login"
    });
});

server.get('/params/:name', (req, res) => {
   
    const name = req.params.name;
      res.send(`Hello ${name}`)
  });

  server.get('/query/:n', (req, res) => {
    const { n } = req.params;

    res.send(`${Sumando(n)}`);
});

server.get('/query/', (req, res) => {
    const n = null;

    res.send(`${Sumando(n)}`);
});

server.get('/body', (req,res) => { 
    res.send(`Objeto: ${list}`)
})

router.get(/animals/dog, (req, res) => {
    res.send({ "grow": "guau guau" });
});

router.get(/animals/cat, (req, res) => {
    res.send({ "grow": "miau" });
});

router.get(/animals/bird, (req, res) => {
    res.send({ "grow": "pio pio" });
});

router.get(/animals/, (req, res) =>{
    res.send({
        "code": 404,
        "error": "Not Found",
        "message": "Error: Path not found"
    });
});

server.use(router);

export default router;

  

 server.listen(3000, () => {
 console.log(`Estamos utilizando el puerto 3000`)
 });
