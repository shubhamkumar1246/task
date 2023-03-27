const express = require('express');

const bodyParser = require('body-parser');

const mongodb = require('./config/mongoose');
const mongoose = require ('mongoose')

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
0
app.use(bodyParser.json())

const router = require('./routes/index')

app.get('/', (req, res) => {
    res.json({"message": "Welcome to the curd operation in nodejs in my task "});
});

router(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});