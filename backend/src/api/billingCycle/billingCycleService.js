
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
        if (error) {
            //erro com objeto
            res.status(500).json({ errors: [error] })
        } else {
            //contador objeto
            res.json({ value })
        }
    })
})

/* 
    rota para o consolidado de todos os ciclos de pagamento (credito e debitos)
    ao chamar summary a resposta é o middleware que traz soma dos credit e debitos
    http://localhost:3003/api/billingcycles/summary   
*/
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

//expotando 
module.exports = BillingCycle