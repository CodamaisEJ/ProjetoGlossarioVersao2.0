const database = require('../models')

class UserController {

    static async createUser(req, res){
        const newUser = req.body
        try {
            const newUserCreate = await database.Users.create(newUser)
            return res.status(200).json(newUserCreate)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res){
        const { id } = req.params
        const newData = req.body
        try {
            await database.Users.update(newData, { where: { id: Number(id) }})
            const updateUser = await database.Users.findOne({ where: { id: Number(id) }})
            return res.status(200).json(updateUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res){
        const { id } = req.params
        try {
            await database.Users.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ message: `id ${id} foi deletado com sucesso!` })
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }
    
    static async listUsers(req, res){
        try {
          const listUsers = await database.Users.findAll()
          return res.status(200).json(listUsers)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = UserController
