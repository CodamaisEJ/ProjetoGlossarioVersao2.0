const { Router } = require('express')

const TermosController = require('../../controllers/TermosController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/term/list', TermosController.listermos)

//exemplo de rota pedindo autenticação 
router.post('/term/create', TermosController.createTerm)

router.get('/term/:id/list', TermosController.listOnetermo)
router.put('/term/:id/update', TermosController.updateTerm)
router.delete('/term/:id/delete', TermosController.deleteTerm)

module.exports = router
