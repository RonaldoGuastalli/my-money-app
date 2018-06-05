
/* 
    definir serviço rest - crud
*/

// refencia aos objetos 
const BillingCycle = require('./billingCycle')
// criar verbos para o crud - express
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// validação tanto no put como no post
BillingCycle.updateOptions({ new: true, runValidators: true })

/*
    rota para quantidade de registros, o método register (BillingCycle.register(router, '/billingCycles'))
    ja cria a rota http://localhost:<porta>/api/billingcycles/count
*/
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {        
        if(error){
            //erro com objeto
            res.status(500).json({errors: [error]})
        } else{
            //contador objeto
            res.json({value})
        }
    })
})

module.exports = BillingCycle