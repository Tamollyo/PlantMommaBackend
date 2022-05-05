const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/category', controllers.getCategory)

router.get('/category/:cid', controllers.getCategoryById)

router.get('/category/:cid/plant', controllers.getPlantsByCategoryId)

router.get('/plant', controllers.getPlant)

router.get('/plant/:pid', controllers.getPlantById)

router.put('/plant/:pid', controllers.updatePlant)

router.delete('/plant/:pid', controllers.deletePlant)

router.post('/plant', controllers.createPlant)

router.get('/plant/:pid/task', controllers.getTasksByPlantId)

router.get('/task', controllers.getTask)

router.get('/task/:tid', controllers.getTaskById)

router.delete('/task/:tid', controllers.deleteTask)

router.post('/task', controllers.createTask)

module.exports = router
