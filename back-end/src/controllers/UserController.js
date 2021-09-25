const database = require('../models')

class UserController {

    static async criaUser(req,res){
        const novoUser = req.body
        try {
            const novoUserCriada = await database.Users.create(novoUser)
            return res.status(200).json(novoUserCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUser(req, res){
        const { id } = req.params
        const novosDados = req.body
        try {
            await database.Users.update(novosDados, { where: { id: Number(id) }})
            const UserAtualizado = await database.Users.findOne({ where: { id: Number(id) }})
            return res.status(200).json(UserAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaUser(req, res){
        const { id } = req.params
        try {
            await database.Users.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ message: `id ${id} foi deletado com sucesso!` })
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }
    
    static async listaUsers(req, res){
        try {
          const todosUsers = await database.Users.findAll()
          return res.status(200).json(todosUsers)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = UserController
