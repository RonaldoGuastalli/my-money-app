/* configuração com o BD */

/*
    uso do mongoose
    evitar wargin no console
    conexão com BD
    referenciar este arquivo no loader.js
*/

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')