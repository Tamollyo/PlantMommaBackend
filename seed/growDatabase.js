const db = require('../db')
const { Task, Category, Plant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // CATEGORIES
  const categoryIndoor = new Category({
    name: 'Indoor Plants',
    description: 'Indoor Plants require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await categoryIndoor.save()

  const categoryOutdoor = new Category({
    name: 'Outdoor Plants require a lot of love',
    description: 'Outdoor Plants require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await categoryOutdoor.save()

  const categoryHerb = new Category({
    name: 'Herbs',
    description: 'Herbs require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await categoryHerb.save()

  // PLANTS
  const plantSpider = new Plant({
    name: 'Spider Plant',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    category: categoryIndoor._id
  })
  await plantSpider.save()

  const plantMonster = new Plant({
    name: 'Monstera',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    category: categoryIndoor._id
  })
  await plantMonster.save()

  const plantDaisy = new Plant({
    name: 'Daisy',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    category: categoryOutdoor._id
  })
  await plantDaisy.save()

  const plantThyme = new Plant({
    name: 'Thyme',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    category: categoryHerb._id
  })
  await plantThyme.save()

  // Task
  const tasks = [
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      plant: plantMonster._id
    },
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      plant: plantSpider._id
    },
    {
      tag: 'Soak',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      plant: plantDaisy._id
    },
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      plant: plantThyme._id
    },
    {
      tag: 'Pick',
      description: 'Pull off leaves and cut extranious stems',
      schedule: 'monthly',
      plant: plantThyme._id
    }
  ]
  await Task.insertMany(tasks)
}

const run = async () => {
  // await db.dropDatabase()
  await Category.deleteMany()
  await Plant.deleteMany()
  await Task.deleteMany()
  await main()
  db.close()
}

run()
