const database = require("../models");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const bcrypt = require("bcrypt");
class TokenController {
  static async createToken(req, res, next) {
    const { email, senha } = req.body;
    try {
      const userEmail = await database.Users.findOne({ where: { email } });
      let hashedPassword = "";

      if (userEmail) {
        hashedPassword = userEmail.senha;
      }

      if (!userEmail) {
        return res.status(401).json({ error: "E-mail não encontrado!" });
      }

      //   desencripta a senha
      let isPasswordValid = await bcrypt.compare(senha, hashedPassword);

      const userSenha = await database.Users.findOne({ where: { senha } });

      if (!userSenha && !isPasswordValid) {
        return res.status(401).json({ error: "Senha inválida!" });
      }

      const { id, nome, tipo_de_usuario } = userSenha;

      return await res.json({
        user: { id, nome, email, tipo_de_usuario },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async destroyToken(req, res, next) {
    const token = req.body;
    try {
      await jwt.destroy(token);
      return res.redirect("/");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TokenController;
