const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco: Number
})

async function criaNovoProduto(codigoRecebido, nomeRecebido, precoRecebido) {
    await Produto.create({
        codigo: codigoRecebido,
        nome: nomeRecebido,
        preco: precoRecebido
    })
}

async function atualizaProduto(nomeAProcurar, novoCodigo, novoNome, novoPreco) {
    await Produto.findOneAndUpdate(
        {nome: nomeAProcurar},
        {
            codigo: novoCodigo,
            nome: novoNome,
            preco: novoPreco
        }
    )
}

async function deletaProduto(nomeADeletar){
    await Produto.findOneAndDelete({nome: nomeADeletar})
}

async function exibeTodosOsProdutos(){
    console.log(await Produto.find())
}

async function exibeUmProduto (nomeAProcurar) {
    console.log(await Produto.findOne({nome: nomeAProcurar}))
}




// let monitor = produtos[0].nome.toString
// console.log(monitor)

// async function repete () {
//     let ctrl = 0
//     while (ctrl < 10) {
//         console.log(ctrl);
//         criaNovoProduto(produtos[ctrl].codigo, produtos[ctrl].nome, produtos[ctrl].preco);

//         ctrl++
//     }
// }

async function repete () {
//     let ctrl = 0
//     while (ctrl < 10) {
//         console.log(ctrl);
//         criaNovoProduto(produtos[ctrl].codigo, produtos[ctrl].nome, produtos[ctrl].preco);

//         ctrl++
//     }
// }


// async function repete () {
//         let ctrl = 0
//         while (ctrl < produtos.length) {
//             console.log(ctrl);
//             criaNovoProduto(monitor);
    
//             ctrl++
//         }
//     }

// repete()

const produtos = [
    {nome: "monitor", codigo: 1001, preco: 300},
    {nome: "teclado", codigo: 12101, preco: 301320},
    {nome: "mouse", codigo: 1011201, preco: 30110},
    {nome: "fone", codigo: 1011201, preco: 30110},
    {nome: "impressora", codigo: 1011201, preco: 30110},
    {nome: "ssd", codigo: 1001, preco: 300},
    {nome: "ram", codigo: 12101, preco: 301320},
    {nome: "pendrive", codigo: 1011201, preco: 30110},
    {nome: "sd", codigo: 1011201, preco: 30110},
    {nome: "adaptador", codigo: 1011201, preco: 30110}
    
]

let ctrl = 0 
while(ctrl < produtos.length){
    criaNovoProduto(produtos[ctrl].codigo, produtos[ctrl].nome, produtos[ctrl].preco);
    ctrl++;
}

exibeTodosOsProdutos()