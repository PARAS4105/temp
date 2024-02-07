const express = require('express');
const app = express();
const {products , people } = require('./data.js')
app.get( '/' ,  (req , res ) => {
    res.json(products);

})

app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})
