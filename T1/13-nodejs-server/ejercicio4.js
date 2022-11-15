const http = require("http");
const fs = require('fs');
const index = fs.readFileSync('cajas.html');


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
      case "/page":
        res.writeHead(200);
        res.end(index);
        break;

        case "/error":
            req.statusCode = 404;
            res.end('Not Found Error 404');
            break;
    } 
  })
  .listen(3000);