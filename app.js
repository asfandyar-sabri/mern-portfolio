const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello from server</h1>");
})

app.get('/about', (req, res) => {
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
    console.log("Server running at port 3001");
})