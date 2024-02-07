// HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.end('Welcome To Our Home Page');
    }
    if (req.url === '/about') {
        res.end('Welcome To Our About Page');
    }
    res.end(`
    <h1> OOOps !!!</h1>
    <p> We Can't  Seem  To Find The Page  You Are Looking For </p>
    <a href='/'> Click Here To Go To Home Page</a>
        `)
})

server.listen(5000);