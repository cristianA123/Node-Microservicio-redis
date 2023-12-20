const express = require('express');


const secure = require('./secure')
const response = require('../../../network/response');
const Controller = require('./index')

const router =  express.Router();

router.get('/', (req, res, next) => {
    Controller.list()
        .then((lista) => {
            return response.success( req, res, lista, 200 )
        })
        .catch(next)

})

router.get('/:id', (req, res, next) => {
    Controller.get(req.params.id)
        .then((lista) => {
            return response.success( req, res, lista, 200 )
        })
        .catch(next)
})

const upsert = (req, res, next) => {
    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res, user, 201);
    })
    .catch(next);
}

router.post('/', upsert);

router.put('/', secure('update') ,upsert2)

function upsert2(req, res, next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
    
}

module.exports = router