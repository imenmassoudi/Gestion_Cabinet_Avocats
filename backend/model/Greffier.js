const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GreffierSchema = new Schema({
    
    nom: {
        type: String,
        required: true,
        minlength: 3
    },
    
    prenom: {
        type: String,
        required: true,
        minlength: 3
    },
    date_nais: {
        type: String,
        required: true,
        minlength: 3
    },
    adresse: {
        type: String,
        required: true,
        minlength: 3
    },
    etat_civile: {
        type: String,
        required: true,
        minlength: 3
    },
    nombre_e: {
        type: Number,
        required: true,
        unique: true
       
    },
    type_paye: {
        type: Number,
        required: true,
        unique: true
       
    },
    base: {
        type: Number,
        required: true,
        unique: true
       
    },

    cin: {
        type: String,
        unique: true,
        required: true,
        length: 8
    },
    tel: {
        type: String,
        required: true,
        length: 8
    },


    categorie: {
        type: Number,
        required: true,
    },
    
    echelon: {
        type: Number,
        required: true,
        
    },

    cnss: {
        type: String,
        required: true,
    },

    contrat: {
        type: String,
        required: true,
    },
    sexe: {
        type: String,
        required: true,
    },
    date_emb: {
        type: String,
        required: true,
    },
    modalite: {
        type: Number,
        required: true,
    },
    actif: {
        type: String,
        required: true,
    },
    chef: {
        type: String,
        required: true,
    },
    gerant: {
        type: String,
        required: true,
    },



  


}, 
{
    timestamps: true, //when it was created
});

const Greffier = mongoose.model('Greffier', GreffierSchema);

module.exports = Greffier;