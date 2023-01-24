const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config({
    path: './config.env'
});

require('./db/conn')

const user = require('./models/user')

const PORT = process.env.PORT

app.use(express.json());
app.use(cors());
app.use(require('./router/auth'));

// middleware


// app.get('/about', (req, res) => {
//     res.send("<h1>About page</h1>");
// })

app.get('/contact', (req, res) => {
    res.send("<h1>Contact page</h1>");
})

app.get('/signin', (req, res) => {
    res.send("<h1>Signin</h1>");
})

app.get('/signup', (req, res) => {
    res.send("<h1>Signup</h1>");
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})