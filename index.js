const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const dotenv = require('dotenv').config();
const ejs = require('ejs');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {

});

app.post('/redirect', (req, res) => {
    res.redirect('/');
});

app.post('/coords', (req, res) => {
    console.log(req);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});