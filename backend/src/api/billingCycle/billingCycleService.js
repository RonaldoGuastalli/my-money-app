
/* 
    definir serviço rest - crud
*/

// refencia aos objetos 
const BillingCycle = require('./billingCycle')
// criar verbos para o crud - express
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// validação tanto no put como no post
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle