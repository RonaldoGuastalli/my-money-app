//Configurando o Servidor com o Express
const server = require('./config/server')
// referência para o arquivo BD
require('./config/database')
//referência para as rotas passando como parâmtro o server
require('./config/routes')(server)