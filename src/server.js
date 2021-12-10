const express = require("express")
const app = express()
const hostname = process.env.HOSTNAME || "localhost"
const port = process.env.PORT || 3000

const routes = require('./routes')

routes(app)

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})

module.exports = app