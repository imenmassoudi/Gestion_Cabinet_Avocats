const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmplacementSchema = new Schema({
    
    libelle: {
        type: String,
        required: true
    },
    
   
  


}, 
{
    timestamps: true, //when it was created
});

const Emplacement = mongoose.model('Emplacement', EmplacementSchema);

module.exports = Emplacement;