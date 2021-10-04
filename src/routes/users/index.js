const { Router } = require('express')

const UserController = require('../../controllers/UserController')
const TokenController = require('../../controllers/TokenController')

const router = Router()

router.get('/login', function(req, res) {
    res.redirect('/')
    console.log(__dirname)
})

//Rotas dos usuarios abaixo acessadas atualmente somente pelo o insomnia
router.get('/users/list', UserController.listUsers)
router.post('/user/create', UserController.createUser)
router.post('/token/create', TokenController.createToken)
router.put('/user/:id/update', UserController.updateUser)
router.delete('/user/:id/delete', UserController.deleteUser)

module.exports = router