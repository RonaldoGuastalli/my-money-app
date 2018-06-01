const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//inclui o modulo body-parser realiza a coversão dos dados submetidos por formulário html em objeto json. 
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//sobe o servidor
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})