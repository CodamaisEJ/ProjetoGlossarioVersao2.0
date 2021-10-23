const { Router } = require('express')

const NotificationController = require('../../controllers/NotificationController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

//Rotas dos termos abaixo acessadas atualmente somente pelo o insomnia

router.get('/notifications/list', NotificationController.listNotifications)

// //exemplo de rota pedindo autenticação 
router.post('/notification/create', NotificationController.createNotification)

router.get('/notification/:id/list', NotificationController.listOneNotification)

module.exports = router