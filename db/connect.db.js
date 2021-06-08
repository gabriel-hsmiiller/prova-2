const mysql = require('mysql');
const path = require('path');
const fs = require('fs');
const config = require('../db.config.json');

const { host, port, user, password, database } = config.connection;

const connection = mysql.createConnection({
    host,
    port,
    user,
    password,
    multipleStatements: true,
});

connection.connect((err) => {
    if(err) throw err;

    const query = fs.readFileSync(path.join(__dirname, './query/db_create.sql')).toString();

    connection.query(query, function (err, result) {
        if(err) throw err;
    })
});

module.exports = connection;