const mongoose = require('mongoose')
const PlantSchema = require('./Plant')
const CategorySchema = require('./Category')
const CareSchema = require('./Care')

const Plant = mongoose.model('Plant', PlantSchema)
const Category = mongoose.model('Category', CategorySchema)
const Care = mongoose.model('Care', CareSchema)

module.exports = {
  Plant,
  Category,
  Care
}
