
const http = require('http');
const { readFileSync } = require('fs')

const server = http.createServer((req, res) => {
    // console.log('User Hit The Server');
    // console.log(req.method);

    const path = {
        index: readFileSync('./navbar-app/index.html'),
        logo: readFileSync('./navbar-app/logo.svg'),
        js: readFileSync('./navbar-app/browser-app.js'),
        css: readFileSync('./navbar-app/styles.css'),
    }

    console.log(req.url);
    // Home Page
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })

        res.write(path.index);
        res.end();

    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(path.css);
        res.end();
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(path.js);
        res.end();
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(path.logo);
        res.end();
    }
    else if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(path.logo);
        res.end();
    }


    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`Hello User <br> These Is About Page`);
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`Resource Is Not Found \n <br> <a href='/'> Click Here To Go To Home Page</a>`);
        res.end();

    }
})

server.listen(5000);


