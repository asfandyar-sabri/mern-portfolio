const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config({
    path: './config.env'
});

const PORT = process.env.PORT

require('./db/conn')

const middleware = (req, res, next) => {
    console.log("Hi I'm middleware")
    next()
}

app.get('/', (req, res) => {
    res.send("<h1>Hello from server</h1>");
})

app.get('/about', middleware, (req, res) => {
    res.send("<h1>About page</h1>");
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact page</h1>");
})

app.get('/signin', (req, res) => {
    res.send("<h1>Signin</h1>");
})

app.get('/signup', (req, res) => {
    res.send("<h1>Signup</h1>");
})

app.listen(3001, () => {
    console.log(`Server running at port ${PORT}`);
})