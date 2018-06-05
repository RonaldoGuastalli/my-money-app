const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//inclui o modulo body-parser realiza a coversão dos dados submetidos por formulário html em objeto json. 
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

//sobe o servidor
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

//exporta server, uma instância do express
module.exports = server