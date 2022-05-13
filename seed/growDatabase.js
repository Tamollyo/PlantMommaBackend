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
    description: 'Tough plant with long leaves. Propagates easily',
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
      'https://flower-meanings.com/wp-content/uploads/2019/08/White-daisies.jpg',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantDaisy.save()

  const plantHosta = new Plant({
    name: 'Hosta',
    description:
      'Reliable and easy to grow, hostas are long-lived—and may even outlive the gardener!',
    sun: 'Shade',
    schedule:
      'Water weekly, once large enough you can split the plant and propagate more!',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/hosta-plant.jpg?itok=pVQZuJwV',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantHosta.save()

  const plantHops = new Plant({
    name: 'Hops',
    description:
      'Reliable and easy to grow, hostas are long-lived—and may even outlive the gardener!',
    sun: 'Shade',
    schedule:
      'Water weekly, once large enough you can split the plant and propagate more!',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/hops-closest.jpg?itok=3DsKxYWu',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantHops.save()

  // HERBS
  const plantThyme = new Plant({
    name: 'Thyme',
    description:
      'Thyme is a wonderful herb with a pleasant, pungent, clover flavor. It smells like summer to us!',
    sun: 'Full sun, part sun',
    schedule: 'Biweekly water, or when dry',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/thyme-planting-growing.jpg?itok=mq2xykYZ',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantThyme.save()

  const plantRosemary = new Plant({
    name: 'Rosemary',
    description:
      'Rosemary is a perennial evergreen shrub with blue flowers. It is an aromatic and distinctive herb with a sweet, resinous flavor.',
    sun: 'Full sun',
    schedule: 'Water when dry, biweekly',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/rosemary-foliage.jpg?itok=KbLHnHoT',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantRosemary.save()

  const plantBasil = new Plant({
    name: 'Basil',
    description:
      'Basil is a warm-weather, fragrant herb that tastes great in many dishes—including the beloved homemade pesto!',
    sun: 'Full sun',
    schedule: 'Water weekly',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/basil-leaves-herb.jpg?itok=EXbFsZgZ',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantBasil.save()

  const plantOregano = new Plant({
    name: 'Oregano',
    description:
      'Oregano is a perennial herb with rose-purple or white flowers and a taste reminiscent of thyme.',
    sun: 'Full sun',
    schedule: 'Water when wilted',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/oregano.jpg?itok=ZKKSzRjI',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantOregano.save()

  const plantLavender = new Plant({
    name: 'Lavender',
    description:
      'Lavender is a bushy, strong-scented perennial plant from the Mediterranean.',
    sun: 'Full sun',
    schedule: 'Water bi-weekly, grows fast',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/lavender-field-1595587_1920.jpg?itok=ybMMpEDa',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantLavender.save()

  const plantParsley = new Plant({
    name: 'Parsley',
    description:
      'Parsley is a biennial plant with bright green, feather-like leaves that is in the same family as dill.',
    sun: 'High to medium light',
    schedule: 'Biennial, water weekly',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/parsley-planting-growing-harvesting.jpg?itok=DVs2qmfy',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantParsley.save()

  const plantSage = new Plant({
    name: 'Sage',
    description:
      'Perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers.',
    sun: 'Full sun',
    schedule: 'Bloom Time, Summer. Water weekly',
    maintenance: 'Low',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/sage-planting-growing-harvesting.jpg?itok=K1NEp8wp',
    alive: 'Alive',
    category: categoryHerb._id
  })
  await plantSage.save()

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
