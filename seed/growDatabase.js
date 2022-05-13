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
    sun: 'Part, and full sun',
    schedule: 'Plant in spring, after the last frost',
    maintenance: 'Medium',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/hops-closest.jpg?itok=3DsKxYWu',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantHops.save()

  const plantWis = new Plant({
    name: 'Wisteria',
    description:
      'Wisteria blooms vigorously in spring, producing clusters of lilac-color flowers on new growth, which in turn emerges from spurs off the main shoots.',
    sun: 'Full sun',
    schedule: 'Water weekly',
    maintenance: 'Medium',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/wisteria.jpg?itok=4EmEdLiZ',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantWis.save()

  // https://www.almanac.com/plant/sunflowers
  const plantSun = new Plant({
    name: 'Sun Flower',
    description:
      'Everyone loves growing sunflowers. With bright blooms that go all summer, very few plants are as heat-tolerant, resistant to pests, and attractive to pollinators and birds.',
    sun: 'Full sun',
    schedule: 'Water weekly',
    maintenance: 'Medium',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/sunflower-1627193_1920.jpg?itok=3ncNl6ha',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantSun.save()

  const plantDah = new Plant({
    name: 'Dahlia',
    description:
      'Dahlias inspire awe and a good cheer. Growing vegetables? Put a row of dahlias on the border, where they will not shade your edibles. They make for lovely cut flowers.',
    sun: 'Full sun',
    schedule: 'Water weekly',
    maintenance: 'Medium',
    image:
      'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/dahlia-3598551_1920.jpg?itok=htdAcnXh',
    alive: 'Alive',
    category: categoryOutdoor._id
  })
  await plantDah.save()

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
      tag: 'Propagate',
      description: 'Cut off plant nodes and replant',
      schedule:
        'Once nodes have established themselves off of the larger plant',
      plant: plantSpider._id
    },
    {
      tag: 'Water',
      description: 'water plant',
      schedule: 'weekly, or when drooping',
      plant: plantDaisy._id
    },
    {
      tag: 'Mist',
      description: 'Mist plant when drooping',
      schedule: 'weekly, or when drooping',
      plant: plantSage._id
    },
    {
      tag: 'Soak',
      description: 'Soak plant throughly',
      schedule: 'Weekly',
      plant: plantDah._id
    },
    {
      tag: 'Water',
      description: 'Mist plant',
      schedule: 'weekly',
      plant: plantThyme._id
    },
    {
      tag: 'Water',
      description: 'Mist plant',
      schedule: 'weekly',
      plant: plantOregano._id
    },
    {
      tag: 'Cuttings',
      description:
        'Take cuttings from the oregano plant and let dry or keep in wet papertowel.',
      schedule: 'weekly or when plant appears overgrown',
      plant: plantOregano._id
    },
    {
      tag: 'Water',
      description: 'Mist plant',
      schedule: 'weekly',
      plant: plantBasil._id
    },
    {
      tag: 'Pick',
      description: 'Pull off leaves and cut extranious stems',
      schedule: 'monthly',
      plant: plantThyme._id
    },
    {
      tag: 'Pick',
      description: 'Pull off leaves and cut extranious stems',
      schedule: 'monthly',
      plant: plantBasil._id
    },
    {
      tag: 'Pick',
      description: 'Pull off leaves and cut extranious stems',
      schedule: 'monthly',
      plant: plantDah._id
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
