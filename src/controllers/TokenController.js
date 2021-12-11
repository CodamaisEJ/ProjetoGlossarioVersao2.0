const database = require('../models')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

class TokenController {

    static async createToken(req, res, next){
        const { email, senha } = req.body
        try { 

            const userEmail = await database.Users.findOne({ where: { email } })

            if(!userEmail){
                return res.status(401).json({error: "E-mail não encontrado!"})
            }

            const userSenha = await database.Users.findOne({ where: { senha } })

            if(!userSenha){
                return res.status(401).json({error: "Senha não encontrada!"})
            }

            const { id, nome, tipo_de_usuario } = userSenha

            return await res.json({ 
                user: { id, nome, email, tipo_de_usuario },
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                }
                )
            })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async destroyToken(req, res, next){
        const token = req.body
        try { 

            await jwt.destroy(token)
            return res.redirect('/')

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

<<<<<<< HEAD
module.exports = TokenController;
=======
module.exports = TokenController
>>>>>>> parent of 47cc3f2... criptografia de senha
