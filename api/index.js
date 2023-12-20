const express = require('express')
// const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')

const config  = require('../config')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const { errors } = require('./../network/erros')

const app = express();

app.use(express.json())

//routes
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(config.api.port, () => {
    console.log(`Escuchando en el puerto ${config.api.port}`)
})