const { Router } = require('express')

const TermosController = require('../../controllers/TermosController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/termos/list', TermosController.listermos)

//exemplo de rota pedindo autenticação 
router.post('/termo/create', TermosController.createTerm)

router.get('/termo/:id/list', TermosController.listOnetermo)
router.put('/termo/:id/update', TermosController.updateTerm)
router.delete('/termo/:id/delete', TermosController.deleteTerm)

module.exports = router
