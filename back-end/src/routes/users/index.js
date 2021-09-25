const { Router } = require('express')

const UserController = require('../../controllers/UserController')
const TokenController = require('../../controllers/TokenController')

const router = Router()

router.get('/login', function(req, res) {
    res.redirect('/')
    console.log(__dirname)
})

//Rotas abaixo acessadas atualmente somente pelo o insomnia
router.get('/users/lists', UserController.listaUsers)
router.post('/user/create', UserController.criaUser)
router.post('/token/create', TokenController.criaToken)
router.put('/user/:id/update', UserController.atualizaUser)
router.delete('/user/:id/delete', UserController.deletaUser)

module.exports = router