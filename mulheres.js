const express = require("express")

const router = express.Router()

const app = express()

const porta = 3333

const mulheres = [
    {
        nome: "Renata Yoshii",
        imagem: "https://github.com.br/renatayoshii.png",
        minibio: "Desenvolvedora e analista de dados"
    },
    {
        nome: "Maria Eduarda",
        imagem: "https://github.com.br/mariaeduarda.png",
        minibio: "Desenvolvedora e programadora de jogos"
    },
    {
        nome: "Iana Chan",
        imagem: "https://github.com.br/ianachan.png",
        minibio: "Fundadora da Programa Maria"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)