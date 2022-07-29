const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timbreSchema = new Schema({
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

const Timbre = mongoose.model('Timbre', timbreSchema)

module.exports = Timbre