const mongoose = require('mongoose')
const PlantSchema = require('./Plant')
const CategorySchema = require('./Category')
const TaskSchema = require('./Task')
// const ReviewSchema = require('./Review')

const Plant = mongoose.model('Plant', PlantSchema)
const Category = mongoose.model('Category', CategorySchema)
const Task = mongoose.model('Task', TaskSchema)
// const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Plant,
  Category,
  Task
  // Review
}
