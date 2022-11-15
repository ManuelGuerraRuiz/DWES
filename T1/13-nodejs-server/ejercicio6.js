const querystring = require('query-string');
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/json');
    const name = req.url;
    
    const n = querystring.parse(`name=${name.split('/').join('')}`);
    res.writeHead(200);
    res.end(`Hello ${n.name} !`);

    
  }).listen(3000);