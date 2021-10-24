const database = require('../models')

class NotificationController {

    static async listNotifications(req, res, next){
        try {
            const listNotifications = await database.Notifications.findAll(
              {
                order: [
                  ['id', 'DESC']
                ],
              }
            )
            return res.status(200).json(listNotifications)  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async createNotification(req, res){
      const { id_termo } = req.body
      const newNotification = { ...req.body, id_termo: Number(id_termo) }
      try {
        if(isNaN(id_termo)){
          return res.json({ error: "id_termo não informado ou inválido!" })
        }
        const NewNotification = await database.Notifications.create(newNotification)

        return res.status(201).json(NewNotification)
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