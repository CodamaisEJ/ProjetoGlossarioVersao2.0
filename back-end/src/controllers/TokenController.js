const database = require('../models')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

class TokenController {

    static async criaToken(req, res, next){
        const { login, senha } = req.body
        try { 

            const userLogin = await database.Users.findOne({ where: { login } })

            if(!userLogin){
                return res.status(401).json({error: "Login não encontrado!"})
            }

            const userSenha = await database.Users.findOne({ where: { senha } })

            if(!userSenha){
                return res.status(401).json({error: "Senha não encontrada!"})
            }

            const { id, nome } = userSenha

            return await res.json({ 
                user: { id, nome, login },
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

module.exports = TokenController