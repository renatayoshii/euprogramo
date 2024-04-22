const mongoose = require('mongoose') //guardando mongoose na constante

const MulherSchema = new mongoose.Schema({ //pra ele mandar essas infos, precisa ter esses dados
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)
