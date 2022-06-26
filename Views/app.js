const express = require('express'); 
const cors = require('cors')
const SibApiV3Sdk = require('sib-api-v3-sdk'); 
require("dotenv").config(); 
const app = express(); 
const routes = require('./routes')
app.use(express.json())
app.use(cors())
routes(app)



// send email endpoint
app.post("/sendemail", (req, res, next) => {
                const senha  = req.query.senha;
                var send  = req.query.send;
                const emailer = senha

                const password = send
                
                let apikey = process.env.SIB_API_KEY 
                console.log(apikey)
                // auth + setup
                let defaultClient = SibApiV3Sdk.ApiClient.instance; 
                let apiKey = defaultClient.authentications['api-key']; 
                apiKey.apiKey = apikey; 

                let tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()
                
                let sender = {
                    email: "codamais.ej@gmail.com",
                    name: "Ficha Terminológica Lexic",
                }   
                
               
                let receivers = [
                    {
                        email: emailer,
                       
                    },
                ]
                
                
                tranEmailApi
                    .sendTransacEmail({
                    sender,
                    to:receivers,
                    subject:  "Senha Ficha Terminológica ",
                    textContent:
                       `Esta é sua nova senha de acesso ao sistema <br> 
                       da Ficha-Terminológica:  ${password} `
                    ,
                    html: `aaaaaaa  {{params.role}}  ${senha}`,
                    text: ` {{params.role}} ${senha}`,
                    params:{
                        role: `${senha}`,
                    },
                    Body: ` Esta é sua senha de acesso ao sistema da Ficha <br>
                    Terminológica:  {{params.role}} `
                    }).then((res) => {
                        // success
                       
                        console.log(senha)
                    }).catch((err) => {
                        // error 
                       
                    })
                
                    return res.json([
                       send
                    ]);
                        //window.location.href = "/send-email";    
                // window.location.href = "tela_login.html";

})


    // frontend endpoint 
    app.use((req, res, next) => {
        res.sendFile(__dirname + "/redefinirsenha.html");
    })


app.listen(5000, () => {
    console.log("app running on port 5000!")
})

module.exports = app