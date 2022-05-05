const mongoose = require('mongoose')
const { Category } = require('.')
const Schema = mongoose.Schema

const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    sun: { type: String, required: true },
    schedule: { type: String, required: true },
    maintenance: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
  },
  { timestamps: true }
)

module.exports = Plant
