const http = require("http");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
      case "/page1":
        res.writeHead(200);
        res.end("La super pagina 1 ");
        break;

      case "/page2":
        res.writeHead(200);
        res.end("La super pagina 2");
        break;
    } 
  })
  .listen(3000);