//referências
const express = require('express')

/* 
    obs: no arquivo server tem uma instancia para o express (const server = express())
    para receber este server como parametro function(server), o server deve estar exposto.
*/

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router() // instancia de Router
    server.use('/api', router) //router é middleware

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService') // o resultado billingCycleService
    BillingCycle.register(router, '/billingCycles') // register() do node-restful faz o mapeamento de todas as rotas para rotas de pagamento, portanto
                                                    //para acessar estas rotas de pagamento devemos http://localhost:<porta>/api/billingcycles
}

/* 
TODO:
    configurar o loader.js
    exportar a variavel server em server.js
*/
