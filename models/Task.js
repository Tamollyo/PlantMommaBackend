const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
  {
    tag: { type: String, required: true },
    description: { type: String, required: true },
    schedule: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Plant', required: true }
  },
  { timestamps: true }
)

module.exports = Task
