const database = require('../models')
const crypto = require('crypto')
const mailer = require('../modules/mailer')
const bcrypt = require('bcrypt');
const hostname = process.env.HOSTNAME || "localhost"

class ForgotPasswordController {
  static async ForgotPassword (req, res) {

    // capturar email do body da requiusição
    const { email } = req.body

    try {

        // encontrar o usuário de acordo com o email
        const user = await database.Users.findOne({ where: { email } })    
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }
        
        // const token = user.generateToken()
        // await user.update({ token })
        // return res.json({ token }) 

        // criar um token
        const token = crypto.randomBytes(20).toString('hex')

        // criar um tempo de expiração
        const now = new Date()
        now.setHours(now.getHours() + 1)

        // atualizar o usuário
        await user.update({
            passwordResetToken: token,  // token  
            passwordResetExpires: now,  // data de expiração
        }) // atualiza o token e a data de expiração

        // await database.Users.update(userToken, { where: { email } });
        // const updateUser = await database.Users.findOne({
        //   where: { email },
        // })
        // res.status(200).json(updateUser);
        
        console.log(token, now)

        // enviar email
        mailer.sendMail({
            to: email,
            from: 'glossario2021@gmail.com',
            template: 'auth/forgotPassword',
            context: { hostname, token },
            subject: 'Recuperação de senha Glossário',
        }, (err) => {
            // se der erro, retornar o erro calback
            if (err) {
                return res.status(400).json({ error: 'Não recuperou sua senha!' })
            }
            
            return res.send()
        })

    } catch (error) {

      return res.status(400).json({
        error: 'Email não encontrado!'
      })
    }
  }

  static async ResetPassword (req, res) {

    // capturar o email, token e senha do body da requisição
    const { email, token, senha } = req.body

    try {
      
        // encontrar o usuário de acordo com o email
        const user = await database.Users.findOne({ where: { email } })

        // se não encontrar o usuário, retornar erro
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado!' })
        }

        // se o token for diferente do token do usuário, retornar erro
        if (token !== user.passwordResetToken) {
            return res.status(400).json({ error: 'Token inválido!' })
        }

        // se o token do usuario estiver expirado, retornar erro
        const now = new Date()
        if (now > user.passwordResetExpires) {
            return res.status(400).json({ error: 'Token expirado!' })
        }

        // se o token for igual ao token do usuário, atualizar a senha
        // criptografar a senha informada pelo usuário
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);
        await user.update({
            senha: hashedPassword,
            passwordResetToken: null,
            passwordResetExpires: null,
        })
        
        return res.send()

    } catch (error) {
      return res.status(400).json({
        error: 'Não foi possível resetar a senha!'
      })
      
    }

  }
}

module.exports = ForgotPasswordController