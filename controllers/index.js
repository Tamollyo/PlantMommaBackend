const { json } = require('express/lib/response')
const { Plant, Category, Task } = require('../models/index')

const getCategory = async (req, res) => {
  try {
    const category = await Category.find()
    console.log(category)
    return res.status(201).send(category)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.cid)
    return res.status(201).send(category)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlant = async (req, res) => {
  try {
    const plant = await Plant.find()
    console.log(plant)
    return res.status(201).send(plant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.pid)
    return res.status(201).send(plant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()
    return res.status(201).json(plant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlant = async (req, res) => {
  console.log(req.params)
  try {
    const { pid } = req.params
    console.log(pid)
    const plant = await Plant.findByIdAndUpdate(pid, req.body, { new: true })
    res.send({ plant })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlant = async (req, res) => {
  try {
    const { pid } = req.params
    const deleted = await Plant.findByIdAndDelete(pid)
    if (deleted) {
      return res.status(200).send('Plant deleted')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlantsByCategoryId = async (req, res) => {
  try {
    let plants = await Plant.find({ category: req.params.cid }).exec()
    return res.status(201).json(plants)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.find()
    console.log(task)
    return res.status(201).send(task)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.tid)
    return res.status(201).send(task)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body)
    await task.save()
    return res.status(201).json(task)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteTask = async (req, res) => {
  try {
    const { tid } = req.params
    const deleted = await Task.findByIdAndDelete(tid)
    if (deleted) {
      return res.status(200).send('Task deleted')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTasksByPlantId = async (req, res) => {
  try {
    let tasks = await Task.find({ plant: req.params.pid }).exec()
    return res.status(201).json(tasks)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCategory,
  getCategoryById,
  getPlant,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
  getPlantsByCategoryId,
  getTask,
  getTaskById,
  deleteTask,
  createTask,
  getTasksByPlantId
}
