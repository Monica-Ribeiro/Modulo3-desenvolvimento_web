// ---------Constantes da aplicação-------------
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const connectionString = "mongodb+srv://admin:admin123@appdatabase.ry0gm2w.mongodb.net/"
// ---------Minhas constantes-------------
const port = 5000
const Produto = require("./models/produto")

app.use(cors())
app.use(express.json())

app.get("/listar-produtos", async (req, res) => {
    try {
        let produtos = await Produto.find();
        return res.status(200).json(produtos);
    }
    catch (error) {
        return res.status(500).json(error);
    }
})

app.post("/adicionar-produto", async (req, res) => {
    try{
        let { nome, descricao, imagem, valor, categoria }  = req.body
        
        let produto = {
            nome,
            descricao,
            imagem,
            valor,
            categoria
        }
        
        await Produto.create(produto);
        return res.status(201).json("Produto cadastrado com sucesso!");
    }
    catch(error){
        console.log(error)
        return res.status(500).json(error);
    }


})

mongoose.connect(connectionString, {
    dbName: "Shein"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`Servidor rodando na porta ${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
