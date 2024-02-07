const express = require('express');
const app = express();
const { people } = require('./data.js');


// Static Assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.get('/api/people', (req, res) => {
    res.status(200).send({
        success: true,
        data: people
    })

})
app.post('/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            success: false,
            msg: "Please Provide Name Value"
        })
    }
    else {
        res.status(201).json({
            success: true,
            data: [...people, name]
        })
    }
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            success: false,
            msg: "Please Provide Name Value"
        })
    }
    res.status(201).json({
        success: true,
        person: name
    })
})

app.put('/api/people/:id', (req, res) => {
    const { name } = req.body
    const { id } = req.params

    const person = people.find((prop) => {
        if (prop.id === Number(id)) {
            return prop
        }
    })
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No Person With id ${id}`
        })
    }
    else {
        const newPeople = people.map((prop) => {

            if (person.id === Number(id)) {
                person.name = name
            }
            return person

        })
        return res.status(200).json(
            {
                success: true,
                data: person

            }
        )

    }


})
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params

    const person = people.find((prop) => {
        if (prop.id === Number(id)) {
            return prop
        }
    })
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No Person With id ${id}`
        })
    }
    else {
        const NewArray = people.filter((prop)=>{
            if(prop.id !== Number(id)){
                return prop
            }
        })
        return res.status(200).json(
            {
                success: true,
                data: NewArray

            }
        )

    }


})





app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`
           Welcome ${name}
            `)
    }
    else {
        res.status(401).send(`
            Please Provide The Credentials 
        `)
    }
})

app.listen(5000, () => {
    console.log('Server Is Listening On Port : 5000')
})
