const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main () {
    const Produto = mongoose.model('Produto',
    {
        codigo: Number,
        nome: String,
        preco: Number
    })

    Produto.create({
        codigo: 4,
        nome: "Pneu Pirelli A15",
        preco: 500
    })

    // await Produto.findOneAndUpdate(
    //     {preco: 1100},
    //     {
    //         codigo: 2,
    //         nome: "Monitor Genérico DELL",
    //         preco: 400
        // }
    // )

    await Produto.findOneAndDelete({preco: 1100})

    
    // console.log(await Produto.find())

    //console.log(await Produto.findOne({preco: 500}))

}

main()