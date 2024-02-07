
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('User Hit The Server');
    console.log(req.method);
    console.log(req.url);
    // Home Page
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`Hello User <br> These Is Home Page`);
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`Hello User <br> These Is About Page`);
        res.end();
    }
    else {
        res.writeHead(404 , { 'content-type': 'text/html' })
        res.write(`Resource Is Not Found \n <br> <a href='/'> Click Here To Go To Home Page</a>`);
        res.end();
         
    }
})

server.listen(5000);


