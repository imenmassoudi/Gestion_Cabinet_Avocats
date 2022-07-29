const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HonoraireExtraSchema = new Schema(
  {
    libelle_arabe: {
      type: String,
      trim: true,
    },
    libelle_francais: {
      type: String,
      trim: true,
    },
    montant: {
      type: Number,
    },
  },
  {
    timestamps: true, //when it was created
  }
)

const HonoraireExtra = mongoose.model('HonoraireExtra', HonoraireExtraSchema)

module.exports = HonoraireExtra