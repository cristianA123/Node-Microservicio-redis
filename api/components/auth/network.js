const express = require('express');
const response = require('../../../network/response');


const router =  express.Router();
const Controller = require('./index')

router.post('/login', (req, res) => {
    Controller.login(req.body.username, req.body.password)
        .then((token) => {
            return response.success( req, res, token, 200 )
        })
        .catch( (error) => {
            return response.error( req, res, 'Informacion invalida', 400 )
        } )

})


module.exports = router