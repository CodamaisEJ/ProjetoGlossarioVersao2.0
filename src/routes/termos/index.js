const { Router } = require('express')

const termosController = require('../../controllers/TermosController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/termos/list', termosController.listermos)

//exemplo de rota pedindo autenticação 
router.post('/term/create', termosController.createTerm)

router.get('/term/:id/list', termosController.listOneTerm)
router.put('/term/:id/update', termosController.updateTerm)
router.delete('/term/:id/delete', termosController.deleteTerm)

module.exports = router