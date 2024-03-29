const express = require('express');
const app = express();
const { products, people } = require('./data.js')

app.get('/', (req, res) => {
    res.send(`
        <h1 style = "font-size : 123px"> Home Page </h1>
        <a href="/api/products">
            Products
        </a>
    `)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts);

})
app.get('/api/products/:productId', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productId } = req.params
    const singleProduct = products.find((product) => {
        try {
            if (Number(productId) === product.id) {
                return product;
            }

        } catch (error) {
            console.log(error)
        }


    })
    if (!singleProduct) {
        res.status(404).send(`The Product You Are Searching For Is Not Exist `)
    }

    res.json(singleProduct);

})
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {

    console.log(req.params)

})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;

    let sortedProducts = [...products]
    if (search){
        sortedProducts = sortedProducts.filter((product) => {
            product.name.startsWith(search);
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0 , Number(limit));
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({
            success : true,
            data : []
        })
    }
    else{

        res.status(200).json(sortedProducts)
    }


 })

app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})
