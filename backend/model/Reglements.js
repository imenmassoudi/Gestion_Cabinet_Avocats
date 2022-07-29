const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReglementSchema = new Schema({
   

    montant: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
        unique: true,

    },
  
    bare: {
        type: String,
        required: true,
    },
    numOperation: {
        type: String,
        required: true,
    },
    banque: {
        type: String,
        required: true,

    },
    porteur: {
        type: String,
        required: true,
    },
    echeance: {
        type: String,
        unique: true,
        required: true,

    },

})

const Reglement = mongoose.model('Reglement', ReglementSchema)

module.exports = Reglement