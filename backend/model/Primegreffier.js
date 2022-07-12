const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrimegreffierSchema = new Schema({
    
    libelle: {
        type: String,
        required: true
    },
    
    montant: {
        type: Number,
        required: true
    },
    dissociable: {
        type: String,
        required: true,
        
    },
    impot: {
        type: String,
        required: true
        
    },
    mensuel: {
        type: String,
        required: true
     },
    



  


}, 
{
    timestamps: true, //when it was created
});

const Primegreffier = mongoose.model('Primegreffier', PrimegreffierSchema);

module.exports = Primegreffier;