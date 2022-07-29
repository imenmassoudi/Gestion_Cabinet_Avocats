const mongoose = require('mongoose')

const Schema = mongoose.Schema

const param_globalSchema = new Schema({
  tva: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  timbre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  transport: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  photocopie: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
})

const Param_global = mongoose.model('Param_global', param_globalSchema)

module.exports = Param_global