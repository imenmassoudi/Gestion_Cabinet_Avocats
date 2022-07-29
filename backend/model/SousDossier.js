const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sousDossierSchema = new Schema({
    typeDossier: {
        type: String,
    },
    mission: {
        type: String,
        required: true,
    },
    emplacement: {
        type: String,
        required: true,
    },
    lieu: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    observation: {
        type: String,
    },
    numAffaire: {
        type: String,
    },
    idDossier:{
        type:String
    }

})

const sousDossier = mongoose.model('SousDossier', sousDossierSchema)

module.exports = sousDossier