const express = require('express');
const path = require('path');
const app = express();

// Setup Static and Middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static
// })
app.all('*', (req, res) => {
    res.status(404).send(`
    <div style="height: 100vh; display: grid; place-items : center; text-align : center">
        <div>
            <h1 style="font-size: 50px">Resource Not Found</h1>
            <a href="/" style="font-size: 25px">Click Here To Go Back To Home page</a>
        </div>
    </div>
    `)
})

app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})
