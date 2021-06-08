const sql = require('./connect.db');

const tableName = 'esportes';

let esportesDB = function(esportes) {
    this.esportes = esportes;
}

esportesDB.post = function(esporte, result) {
    if(!esporte || !esporte.modalidade || !esporte.tipo || !esporte.distancia || !esporte.sexo || !esporte.local){
        result('Enter with a Esporte object', null)
    } else {
        sql.query(`INSERT INTO ${tableName} SET ?`, esporte, function(err, res) {
            if(err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}

esportesDB.getAll = function(result) {
    sql.query(`SELECT * FROM ${tableName}`, function(err, res) {
        if(err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

esportesDB.get = function(id, result) {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ?`, id, function(err, res) {
        if(err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

module.exports = esportesDB;
