const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  descricao: { type: String },
  valor: { type: Number }, // opcional
  imagem: {type: String }
})

// é a nossa coleção de comidas
const comidasModel = mongoose.model("comidas", ComidasSchema);

module.exports = comidasModel;
