const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Hello Home Page");
    }
    if (req.url === '/about') {

        // BLocking Code

        // for (let i = 0; i <= 1000; i++) {
        //     for (let j = 0; j <= 10; j++) {
        //         console.log(`${i} , ${j}`)
        //     }
        // }
        res.end('Hello About Page');
    }
    res.end("Ooops !!!! there is no page")

})

server.listen(5000, () => {
    console.log("Server Is Listening On Port : 5000")
})