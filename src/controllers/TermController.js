const database = require('../models')

class TermController {

    static async createTerm(req, res){
        const newTerm = req.body
        try {
            const newTermCreate = await database.Terms.create(newTerm)
            return res.status(201).json(newTermCreate)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTerm(req, res){
        const { id } = req.params
        const newData = req.body
        try { 
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
            await database.Terms.destroy({ where: { id: Number(id) }})
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
          const oneTerm = await database.Terms.findOne( { where: { id: Number(id) }})
          return res.status(200).json(oneTerm)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = TermController
