const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DossierSchema = new Schema({
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
    }

})

const Dossier = mongoose.model('Dossier', DossierSchema)

module.exports = Dossier