const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const authConfig = require('../../config/auth')


const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)

    if(!authHeader){
        return res.status(401).json({ error: "Token não enviado!"})
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret)
        return next();

    } catch (error) {
        return res.status(401).json({ error: 'Token invalido!' })

    }

};


module.exports = verifyToken;