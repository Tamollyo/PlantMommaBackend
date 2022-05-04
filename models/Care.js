const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Care = new Schema(
  {
    tag: { type: String, required: true },
    description: { type: String, required: true },
    sun: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Care
