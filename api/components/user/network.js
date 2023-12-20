const express = require('express');
const response = require('../../../network/response');


const router =  express.Router();
const Controller = require('./index')

router.get('/', (req, res) => {
    Controller.list()
        .then((lista) => {
            return response.success( req, res, lista, 200 )
        })
        .catch( (error) => {
            return response.error( req, res, error.message, 500 )
        } )

})

router.get('/:id', (req, res) => {
    Controller.get(req.params.id)
        .then((lista) => {
            return response.success( req, res, lista, 200 )
        })
        .catch( (error) => {
            return response.error( req, res, error.message, 500 )
        } )
})

const upsert = (req, res) => {
    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res, user, 201);
    })
    .catch((err) => {
        console.log(err)
        response.error(req, res, err.message, 500);
    });
}

router.post('/', upsert);

router.put('/', upsert2)

function upsert2(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

module.exports = router