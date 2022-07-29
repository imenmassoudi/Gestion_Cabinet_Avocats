const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tribunauxSchema = new Schema({
    lieu: {
        type: String,
        required: true,
        minlength: 3
    }
}, {
    timestamps: true, //when it was created
});

const Tribunaux = mongoose.model('Tribunal', tribunauxSchema);

module.exports = Tribunaux;