const database = require('../models')

class NotificationController {

    static async listNotifications(req, res, next){
        try {
            const listNotifications = await database.Notifications.findAll({
              include: {
                association: 'NotificacaodoTermo'
              }
            })
            return res.status(200).json(listNotifications)  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async createNotification(req, res){
      const newUser = req.body
      const {situacao_termo} = req.body
      const {data} = req.body
      const {id_termo} = req.body

      try {
        const newNotification= await database.Notifications.create({
            situacao_termo,
            data,
            fk_id_termo: Number(id_termo)
        })

        return res.status(201).json(newNotification)
      } catch (error) {
          return res.status(500).json(error.message)
      }
    }

    static async listOneNotification(req, res, next){
        const { id } = req.params
        try {
          if(isNaN(id)){
            return res.json({ error: "id não informado ou inválido!" })
          }
          const oneNotification = await database.Notifications.findOne( { where: { id: Number(id) }})
          return res.status(200).json(oneNotification)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
}

module.exports = NotificationController