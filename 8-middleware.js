const express = require('express');
const morgan = require('morgan');
const app = express();

const logger = require('./7-logger.js')
const authorize = require('./authorize.js')

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hello User , These Is Home Page")
})
app.get('/about', (req, res) => {
    res.send("Hello User , These Is About Page")
})

app.get('/api/product', (req, res) => {
    res.send("Hello User , These Is api Page")
})

app.get('/api/item', (req, res) => {
    res.send("Hello User , These Is api Page")
})

app.get('/api/response', authorize, (req, res) => {
    res.send("Hello User , These Is About Page")
})



app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})
