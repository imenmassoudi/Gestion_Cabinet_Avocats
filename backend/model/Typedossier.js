const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TypedossierSchema = new Schema({
    
    libelle: {
        type: String,
        required: true
    },
    
   
  


}, 
{
    timestamps: true, //when it was created
});

const Typedossier = mongoose.model('Typedossier', TypedossierSchema);

module.exports = Typedossier;