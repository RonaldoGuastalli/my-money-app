const _ = require('lodash')

//exporta middleware
module.exports = (req, res, next) => {
    //bundle recebe os erros
    const bundle = res.locals.bundle
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

//metodo que faz parse dos erros
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message)) //for que percorre o doc de erro gerado pelo node-restful, pegando a mensagem
    return errors
}