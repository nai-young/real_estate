const mongoose = require('mongoose')

const propiertySchema = new mongoose.Schema({
  title: {
    type: String
  },
  status: {
    type: String
  },
  city: {
    type: String
  },
  type: {
    type: String
  },
  rooms: {
    type: Number
  },
  baths: {
    type: Number
  },
  price: {
    type: Number
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Propierty', propiertySchema)