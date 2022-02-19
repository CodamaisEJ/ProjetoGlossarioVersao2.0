const { Router } = require('express')

const termosController = require('../../controllers/TermosController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/termos/list', termosController.listermos)

//exemplo de rota pedindo autenticação 
router.post('/termos/create', termosController.createTerm)

router.get('/termos/:id/list', termosController.listOneTerm)
router.put('/termos/:id/update', termosController.updateTerm)
router.delete('/termos/:id/delete', termosController.deleteTerm)

module.exports = router