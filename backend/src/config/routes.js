//referências
const express = require('express')

/* 
    obs: no arquivo server tem uma instancia para o express (const server = express())
    para receber este server como parametro function(server), o server deve estar exposto.
*/

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router) //registra que quando /api, chamar router

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService') // o resultado billingCycleService
    BillingCycle.register(router, '/billingCycles') // registra o web server para api/billingCycles get, post, ...
}

/* 
TODO:
    configurar o loader.js
    exportar a variavel server em server.js
*/
