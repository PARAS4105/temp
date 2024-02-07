/*
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen
*/

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
        <h1 style = "font-size : 123px"> Home Page </h1>
        <a href="/api/products">
            Products
        </a>
    `)
})

app.get('/about', (req, res) => {
    res.send(`
        <h1 style = "font-size : 123px"> About Page </h1>
    `)
})

app.all('*', (req, res) => {

    res.status(404).send(`
        <div style="text-align : center ; margin: 0 auto ; width : fit-content" >
        <h1 style = "font-size : 100px"> Resource Not Found </h1>
        <a href="/" style ="font-size : 50px">Click Here To Go Back To Home Page </a>
        </div>
        `)

})

app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})

