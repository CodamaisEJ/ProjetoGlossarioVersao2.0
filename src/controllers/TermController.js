const database = require('../models')

class TermController {

    static async createTerm(req, res){
      const newTerm = req.body
      try {
        const newTermCreate = await database.Terms.create(newTerm)
        if(newTermCreate === 0){
          return res.json({ error: "Deu problema ao criar um termo!" })
        }
        

        //criar uma notificação ao criar um termo
        const findTermCreate = await database.Terms.findByPk(newTermCreate.id)
        console.log(findTermCreate.id)
        if (findTermCreate === 0) {
            return res.status(400).json({ error: 'Termo não encontrado!'})
        }

        // variaveis a seguir que é recebido do banco: 
        const id_termo = findTermCreate.id
        // variavel de satus do termo
        const { situacao_termo } = findTermCreate
        // variavel de nome do usuario
        const { autor } = findTermCreate
        // variavel data atual da notificação
        const data = findTermCreate.data_de_registro
        //criar notificaçao quando cria o termo logo em seguida
        const newNotification= await database.Notifications.create({
            situacao_termo,
            data,
            fk_id_termo: id_termo
        })

        return res.status(201).json(newNotification)
        // return res.status(201).json(newTermCreate)
      } catch (error) {
        // console.error(error)
        return res.status(500).json(error.message.error)
      }
    }

    static async updateTerm(req, res){
      const { id } = req.params
      const newData = req.body
      try { 
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        await database.Terms.update(newData, { where: { id: Number(id) }})
        const updateTerm = await database.Terms.findOne({ where: { id: Number(id) }})
        return res.status(200).json(updateTerm)
      } catch (error) {
          return res.status(500).json(error.message)
      }
    }

    static async deleteTerm(req, res){
      const { id } = req.params
      try {
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        const deleteTerm = await database.Terms.destroy({ where: { id: Number(id) }})
        if(!deleteTerm){
          return res.json({ error: "Termo não encontrado pelo id informado!" })
        }
        return res.status(200).json({ message: `id ${id} foi deletado com sucesso!` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
    
    static async listTerms(req, res){
      try {
        const listTerms = await database.Terms.findAll()
        return res.status(200).json(listTerms)  
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async listOneTerm(req, res) {
      const { id } = req.params
      try {
        if(isNaN(id)){
          return res.json({ error: "id não informado ou inválido!" })
        }
        const oneTerm = await database.Terms.findOne( { where: { id: Number(id) }})
        return res.status(200).json(oneTerm)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = TermController
