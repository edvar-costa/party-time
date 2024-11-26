const mongoose = require("mongoose")

async function main() {
    
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://edvar:Fxk1l69eJy0tsKxw@cluster0.yjf6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("conectado ao banco!")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main