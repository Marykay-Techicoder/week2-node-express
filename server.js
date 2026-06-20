require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use((req, res, next) => {

    console.log(req.method, req.url);

    next();

});


app.get('/', (req, res) => {

    res.send('My Week 2 API');

});

app.post('/user', (req, res) => {


    const { name, email } = req.body;


    if (!name || !email) {

        return res.status(400).json({

            message: "Name and email are required"

        });

    }


    res.send(`Hello, ${name}!`);

});



app.get('/user/:id', (req, res) => {


    const id = req.params.id;


    res.send(`User ${id} profile`);


});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {


    console.log(`Server running on port ${PORT}`);


});
