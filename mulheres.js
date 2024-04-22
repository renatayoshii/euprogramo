const express = require("express") //aqui inicia a biblioteca express
const router = express.Router() //configura primeira parte da rota
const conectaBandoDeDados = require('./bancoDeDados') //ligando bd
conectaBandoDeDados() //chamando a função
const Mulher = require('./mulherModel')
const cors = require('cors') //permite consumir api no front

const app = express() // inicia o aplicativo
app.use(express.json()) //tratando requisiççoes em formato json
app.use(cors())
const porta = 3333 //cria a porta

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find() //quando acontecer a conexção, ele aca as mulheres
        response.json(mulheresVindasDoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request,response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) { //se ele identifica que um nome está sendo enviado
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEncontrada.body.imagem = request.body.imagem
        }

        if (request.body.citacao) {
            mulherEncontrada.body.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
    
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso'})

    } catch (erro) {
        console.log(erro)
    }
}


app.use(router.get("/mulheres", mostraMulheres)) //configura rota get
app.use(router.post('/mulheres', criaMulher)) //configura rota post mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher))
app.use(router.delete('/mulheres/:id', deletaMulher))

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}


app.listen(porta, mostraPorta) //servidor ouve a porta