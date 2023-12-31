const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    valor: {type: Number, require: true},
    categoria: {type: String, require: true}
})

const produto = mongoose.model('produtos', produtoSchema)

module.exports = produto
