// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



const GatoModelo = mongoose.model('Gato', {
    raca: String,
    idade: Number,
    cor: String
})

const gatoQueAcheiNaRua = new GatoModelo({
    raca: "Siames",
    idade: 3,
    cor: "Branco"
})

gatoQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))