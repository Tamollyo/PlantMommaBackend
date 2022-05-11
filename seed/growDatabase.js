const db = require('../db')
const { Task, Category, Plant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // CATEGORIES
  const categoryIndoor = new Category({
    name: 'Indoor Plants',
    description: 'Indoor Plants require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/8NAlRuv.png'
  })
  await categoryIndoor.save()

  const categoryOutdoor = new Category({
    name: 'Outdoor Plants',
    description: 'Outdoor Plants require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/dxX9EHf.png'
  })
  await categoryOutdoor.save()

  const categoryHerb = new Category({
    name: 'Herbs',
    description: 'Herbs require a lot of love',
    weather: 'Sun',
    image: 'https://i.imgur.com/NXZHenN.png'
  })
  await categoryHerb.save()

  // INDOOR PLANTS
  const plantSpider = new Plant({
    name: 'Spider Plant',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605539373/vendor/5422/catalog/product/2/0/20200716061734_file_5f1099be7ad7d_5f109d07acb9d.jpg',
    alive: 'dead',
    category: categoryIndoor._id
  })
  await plantSpider.save()

  const plantSnake = new Plant({
    name: 'Snake Plant',
    description: 'Effortless to grow and reaches up to 2 to 4 feet',
    sun: 'Low Light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://www.domino.com/uploads/2020/01/28/snake-Plant-Benefits-domino.jpg',
    alive: 'Dead',
    category: categoryIndoor._id
  })
  await plantSnake.save()

  const plantMoney = new Plant({
    name: 'Money Tree',
    description:
      'Pet Friendly, Air purifying plant. Can grow to 60ft tall in the wild.',
    sun: 'Low to Bright Indirect',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://www.plants.com/images/157651-Money-Tree-Plant-M_20201203-1607028492125.jpg',
    alive: 'Dead',
    category: categoryIndoor._id
  })
  await plantMoney.save()

  const plantMonster = new Plant({
    name: 'Monstera',
    description: 'Beautiful plant with wonderful dramatic hole formations',
    sun: 'Low to bright indirect light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://www.flowerdaise.com.au/wp-content/uploads/2021/02/0175-scaled.jpg',
    alive: 'Dead',
    category: categoryIndoor._id
  })
  await plantMonster.save()

  // OUTDOOR
  const plantDaisy = new Plant({
    name: 'Daisy',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476733951_9781476733951_hr.jpg',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantDaisy.save()

  // HERBS
  const plantThyme = new Plant({
    name: 'Thyme',
    description: 'Tough plant',
    sun: 'Can survive in low and high light',
    schedule: 'Repot once roots show through bottom',
    maintenance: 'Low',
    image:
      'https://www.edenbrothers.com/store/media/Seeds-Herbs/SHTHY111-1.jpg',
    alive: 'Alive',
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
