const { Router } = require('express')

const TermController = require('../../controllers/TermController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/terms/list', TermController.listTerms)

//exemplo de rota pedindo autenticação 
router.post('/term/create', middlewareAuth, TermController.createTerm)

router.put('/term/:id/update', TermController.updateTerm)
router.delete('/term/:id/delete', TermController.deleteTerm)

module.exports = router