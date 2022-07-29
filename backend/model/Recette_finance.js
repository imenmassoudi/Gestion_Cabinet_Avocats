const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recette_financeSchema = new Schema({
  libelle: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  montant: {
    type: Number,
    required: true,
  },
})

const Recette_Fin = mongoose.model('Recette_Fin', recette_financeSchema)

module.exports = Recette_Fin