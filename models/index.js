const mongoose = require('mongoose')
const PlantSchema = require('./Plant')
const CategorySchema = require('./Category')
const TaskSchema = require('./Task')

const Plant = mongoose.model('Plant', PlantSchema)
const Category = mongoose.model('Category', CategorySchema)
const Task = mongoose.model('Task', TaskSchema)

module.exports = {
  Plant,
  Category,
  Task
}
