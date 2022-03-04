const { Router } = require('express')

const TermosController = require('../../controllers/TermosController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/termos/list', TermosController.listermos)

//exemplo de rota pedindo autenticação 
router.post('/termos/create', TermosController.createTerm)

router.get('/termos/:id/list', TermosController.listOnetermo)
router.put('/termos/:id/update', TermosController.updateTerm)
router.delete('/termos/:id/delete', TermosController.deleteTerm)

module.exports = router
