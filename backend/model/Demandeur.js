const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DemandeurSchema = new Schema({
   

    nom: {
        type: String,
    },
    cin: {
        type: String,
        required: true,
        unique: true,

    },
  
    adresse: {
        type: String,
        required: true,
    },
    adressedesigne: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
    },
    fax: {
        type: String,
    },
    numAffaire: {
        type: String,
        unique: true,
    },

})

const Demandeur = mongoose.model('Demandeur', DemandeurSchema)

module.exports = Demandeur