const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CollaborateurSchema = new Schema({
    
    nom: {
        type: String,
        required: true,
        minlength: 3
    },
    cin: {
        type: String,
        unique: true,
        required: true,
        length: 8
    },
    ville: {
        type: String,
        required: true,
        minlength: 3
    },
    rue: {
        type: String,
        required: true,
        minlength: 3
    },
    num: {
        type: Number,
        required: true,
        unique: true
       
    },
    code_postale: {
        type: Number,
        required: true
        
    },
    activite: {
        type: String,
        required: true,
        minlength: 3
    },
    tel: {
        type: String,
        required: true,
        length: 8
    },

   
    email: {
        type: String,
        required: true,
        minlength: 5
    },
    matricule: {
        type: String,
        required: true,
        minlength: 3
    },
  
    //zouz hajet mouch wadhhin

},

{
    timestamps: true, //when it was created
});

const Collaborateur = mongoose.model('Collaborateur', CollaborateurSchema);

module.exports = Collaborateur;