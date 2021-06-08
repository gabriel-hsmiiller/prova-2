var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configure headers
app.use((req, res, next) => {
    res.setHeader('Accept', 'text/plain,application/json,text/html')
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', ['*'])
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
});

// Child urls
app.use('/esportes', require('./routes/esportes'));

app.use('/static', express.static('public'));

// Base url ('/')
app.get('/', function(req, res, next) {
    console.log('Get /')
    res.send('Server running');
    next();
});

// Server start
app.listen(port, function() {
    console.log(`Service running on localhost:${port}`);
});