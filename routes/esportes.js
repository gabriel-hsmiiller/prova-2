var express = require('express');
var esportesTable = require('../db/esportes.table');
var router = express.Router();

router.get('/', (req, res, next) => {
    esportesTable.getAll(function(err, result){
        if(err) {
            res.status(500).send(err);
            throw new Error(err);
        } else {
            res.json(result);
        }
        next();
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    esportesTable.get(id, function(err, result) {
        if(err) {
            res.status(500).send(err);
            throw new Error(err);
        } else {
            res.json(result[0]);
        }
        next();
    });
});

router.post('/', (req, res, next) => {
    const esporte = req.body;

    esportesTable.post(esporte, function(err, result){
        if(err) {
            res.status(500).send(err);
            throw new Error(err);
        } else {
            res.json(result);
        }
        next();
    });
});

module.exports = router;