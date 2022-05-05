const db = require('../db')
const { Task, Category, Plant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // CATEGORIES
  const cateogryIndoor = new Category({
    type: 'Indoor Plants',
    description: 'Indoor Plants require a lot of love',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await cateogryIndoor.save()

  const cateogryOutdoor = new Category({
    name: 'Outdoor Plants require a lot of love',
    description: '',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await cateogryOutdoor.save()

  const cateogryHerb = new Category({
    type: 'Herbs',
    description: 'Herbs require a lot of love',
    image: 'https://i.imgur.com/ePIkwsB.png'
  })
  await cateogryHerb.save()

  // PLANTS
  const plantSpider = new Plant({
    name: 'Spider Plant',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    category: cateogryIndoor._id
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
    category: cateogryIndoor._id
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
    category: cateogryOutdoor._id
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
    category: cateogryHerb._id
  })
  await plantThyme.save()

  // Task
  const tasks = [
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      category: plantMonster._id
    },
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      category: plantSpider._id
    },
    {
      tag: 'Soak',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      category: plantDaisy._id
    },
    {
      tag: 'Water',
      description: 'Soak plant throughly',
      schedule: 'Every other day',
      category: plantThyme._id
    },
    {
      tag: 'Pick',
      description: 'Pull off leaves and cut extranious stems',
      schedule: 'monthly',
      category: plantThyme._id
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
