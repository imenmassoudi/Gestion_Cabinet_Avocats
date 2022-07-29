const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdversaireSchema = new Schema({
    nom: {
        type: String,
        required: true,
        unique:true,
    },
    registredecommerce: {
        type: String,
    },
   
    adresse: {
        type: String,
    },
    adresseDesigne: {
        type: String,
    },
   
    avocat: {
        type: String,
    },  
    adresseAvocat: {
        type: String,
    },

}, {
    timestamps: true, //when it was created
});

const Adversaire = mongoose.model('Adversaire', AdversaireSchema);

module.exports = Adversaire;