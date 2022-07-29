const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    libelle: {
        type: String,
        required: true,
        minlength: 3
    },
    joursAud: [{
        type: String,
        required: true
    }],
    joursCour: [{
        type: String,
        required: true
    }],
    idTrib: {
        type: String,
        required: true,
        minlength: 3
    }
}, {
    timestamps: true, //when it was created
});



const Services = mongoose.model('Services', serviceSchema);

module.exports = Services;