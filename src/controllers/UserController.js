const database = require('../models')

class UserController {

    static async createUser(req, res){
      const newUser = req.body
      try {
        const newUserCreate = await database.Users.create(newUser)
        return res.status(201).json(newUserCreate)
      } catch (error) {
          return res.status(500).json(error.message)
      }
    }
    
    //funcao para usuarios admins
    //Atualizar perfis de todos os usuarios
    static async updateUser(req, res){
      const { id } = req.params
      const newData = req.body
      try {
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        await database.Users.update(newData, { where: { id: Number(id) }})
        const updateUser = await database.Users.findOne({ where: { id: Number(id) }})
        return res.status(200).json(updateUser)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    //funcao para usuarios sem ser admin
    //Atualizar seu proprio perfil
    static async updateUserMydata(req, res){
      const { id } = req.params
      const newData = req.body
      const { passwordCurrentBody } = req.body
      try {
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        const findUser = await database.Users.findOne({ where: { id: Number(id) }})
        const passwordCurrent = findUser.senha
        if(passwordCurrentBody !== passwordCurrent){
          return res.json({ message: 'Senha não identica ao do banco' })
        }
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
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        const deleteUser = await database.Users.destroy({ where: { id: Number(id) }})
        if(!deleteUser){
          return res.json({ error: "Usuário não encontrado pelo id informado!" })
        }
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

    static async listOneUser(req, res) {
      const { id } = req.params
      try {
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        const oneUser = await database.Users.findOne( { where: { id: Number(id) }})
        return res.status(200).json(oneUser)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = UserController
