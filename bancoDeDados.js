const mongoose = require('mongoose') //chama a biblioteca
//javascript assincrono
require('dotenv').config()

async function conectaBandoDeDados() {
    try { //tente executar
        console.log('Conexão com o banco de dados iniciou') //mensagem para dizer que iniciou
//o awai signifca que ele vai conectar com o bonco mas pode fazer as outras ações
    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conectou com sucesso')
    } catch(erro) {
        console.logo(erro)
    }
}

module.exports = conectaBandoDeDados