const mysql = require('mysql');

const config = require('../db.config.json');

const host = config.connection.host;
const port = config.connection.port;
const user = config.connection.user;
const password = config.connection.password;
const database = config.connection.database;

const connection = mysql.createConnection({
    host,
    port,
    user,
    password,
    database
});

connection.connect((err) => {
    if(err) throw err;
});

module.exports = connection;