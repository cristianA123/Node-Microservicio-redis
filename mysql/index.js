const express = require('express');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(express.json());

// Rutas
app.use('/', router);

app.listen(config.mysqlService.port, () => {
    console.log("Servicio de MYSQL Escuchando en el puerto ".concat(config.mysqlService.port));
    });