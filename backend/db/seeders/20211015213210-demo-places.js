'use strict';
const faker = require('faker');
const weightedGenerator = require('../weightedGen')
const randomAddress = faker.address.streetAddress()
const { User } = require('../models')
let desc = [
  '1br 1ba 450 sqft far detached from society. Perfect place to be driven to boredom',
  '3br 2ba 1500sqft huge mansion in a city with little to do',
  'This large house has a futuristic look and is in poor condition.  The interior is done in nautical colors.  The yard is moderately-sized and looks very formal.',
  'This tiny house has a quaint atmosphere and is in good condition.  The interior is done in colors that remind you of Easter.  The yard is small and looks very formal.',
  'This moderately-sized house looks very old-fashioned and is in average condition.  The interior is done in summery colors.  The yard is moderately-sized and is neatly-trimmed.  Also, the house is rumored to be haunted.',
  'This small house has a fairytale-like look to it and is in average condition.  The interior is done in colors that remind you of a vampires lair.  The yard is enormous and looks very formal.',
  'This large house looks fairly modern and is in average condition.  The interior is done in rich colors.  The yard is large and resembles a meadow.',
  'This small house has a rustic look to it and is in excellent condition.  The interior is done in dark colors.  The yard is large and is neatly-trimmed.',
  'This tiny house looks very modern and is in good condition.  The interior is done in vibrant colors.  The yard is small and is neatly-trimmed.',
  'This tiny house looks very old-fashioned and is in average condition.  The interior is done in airy colors.  The yard is moderately-sized and is overgrown with wild plants.  Also, rumor has it an old witch used to live here.',
  'This large house looks very modern and is in average condition.  The interior is done in vibrant colors.  The yard is large and looks very formal.',
  'This tiny house looks like an old castle and is in average condition.  The interior is done in colors that remind you of Easter.  The yard is enormous and resembles a meadow.',
  'This large house looks like an old castle and is in average condition.  The interior is done in colors that remind you of a garden.  The yard is small and is neatly-trimmed.',
  '2br 1.5ba 900sqft little place. Great place to get work done',
  'The house is equipped with an average kitchen and two bathrooms, it also has a cozy living room, three bedrooms, a small dining area and a spacious garage.',
  'The house is equipped with a modern kitchen and one large bathroom, it also has a large living room, two bedrooms, a small dining area, a sun room and a small basement.',
  'The house is equipped with a huge kitchen and one modern bathroom, it also has a comfortable living room, four bedrooms, a large dining room, a study and a cozy storage room.',
  'his house looks magnificent. It has been built with poplar wood and has white brick decorations. Tall, rectangular windows add to the overall style of the house and have been added to the house in a fairly symmetrical pattern.',
  'The house is equipped with an old-fashioned kitchen and one large bathroom, it also has a large living room, three bedrooms, a snug dining area, a study and a modest storage room.',
  'this house looks very elegant. It has been built with white cedar wood and has burgandy brick decorations. Small, rounded windows add to the overall style of the house and have been added to the house in a very symmetric way.',
  'The house is equipped with an old-fashioned kitchen and one average bathroom, it also has a warm living room, two bedrooms, a spacious dining area, a playroom and a modest basement.',
  'this house looks posh and extravagant. It has been built with sandstone and has tan brick decorations. Small, octagon windows let in plenty of light and have been added to the house in a mostly asymmetric way.',
  'The house is equipped with an old-fashioned kitchen and one average bathroom, it also has a spacious living room, five bedrooms, a modest dining room, a study and a grand storage room.',
  'The house is equipped with a huge kitchen and two modern bathrooms, it also has a large living room, four bedrooms, a cozy dining area and a snug garage.',
  'this house looks grandiose. It has been built with cypress wood and has white cedar wooden decorations. Tall, wide windows brighten up the house and have been added to the house in a mostly symmetric way.',
  'The house is equipped with an old-fashioned kitchen and three bathrooms, it also has a spacious living room, four bedrooms, a cozy dining area and a large basement.',
  'The house is equipped with a small kitchen and two bathrooms, it also has a small living room, five bedrooms, a cozy dining room and a snug storage room.',
  'this house looks very elegant. It has been built with brown bricks and has granite decorations. Tall, half rounded windows add to the overall look of the house and have been added to the house in a fairly symmetrical pattern.',
  'The house is equipped with a small kitchen and one modern bathroom, it also has a snug living room, five bedrooms, a cozy dining room, a library and a grand garage.',
  'The house itself is surrounded by paved ground, with a pool at the backside of the house. This house looks gorgeous. It has been built with oak wood and has white stone decorations. Small, rectangular windows add to the overall style of the house and have been added to the house in a mostly symmetric way.',
  'this house looks snug and comfortable. It has been built with sandstone and has red pine wooden decorations. Tall, squared windows let in plenty of light and have been added to the house in a fairly asymmetrical pattern.',
  'The house is equipped with a large kitchen and one average bathroom, it also has a cozy living room, three bedrooms, a modest dining area, a lounge area and a roomy storage room.',
  'The building is shaped like an L. The extension extends into wooden overhanging panels circling around half the house.',
  'The second floor is smaller than the first, which allowed for a roof garden on one side of the house.',
  'The house is equipped with a small kitchen and three bathrooms, it also has a huge living room, three bedrooms, a small dining room, a bar and a roomy storage room.',
  'This house looks cozy. It has been built with brown stones and has burgandy brick decorations.',
  'Posh and extravagant. It has been built with cypress wood and has red pine wooden decorations.',
  'The house is equipped with an average kitchen and one modern bathroom, it also has a comfortable living room, four bedrooms, a snug dining room and a snug garage.',
  'The house is equipped with an average kitchen and two bathrooms, it also has a small living room, four bedrooms, a cozy dining room and a snug storage room.',
  'contact me for details',
  'The house is equipped with an average kitchen and one modern bathroom, it also has a warm living room, five bedrooms, a snug dining room and a spacious garage.',
  '3br 3ba. the whole bottom floor is yours should you book my lovely home. We have a dog blue that hangs around outside too!',
  'Little ranch a bit outside the city. This this a functioning ranch and have farm animals. You will be able to book a room',
  'This little home is made out of redwood and ontop of a hill. Your party will get the whole building. 2br 2ba. Really quiet area',
  'Extremely close to the library. This location offers excellent study areas with proper materials in science,math and langauges',
  '1br 1ba. Please contact me. No weed users',
  'The house is equipped with a huge kitchen and two bathrooms, it also has a large living room, five bedrooms, a snug dining area and a small basement.',
  'The house is equipped with a modern kitchen and one modern bathroom, it also has a generous living room, three bedrooms, a small dining room and a grand storage room.',
  'The building is square shaped. The house is half surrounded by a covered patio..',
  'The second floor is smaller than the first, which allowed for several small balconies on one side of the house.',
]
let title = [
  'Cozy cabin',
  'Refuberished House',
  'Stylish Features, LEED Certified',
  'Come live in our luxury rooms!',
  'First Floor Triplex.',
  'Private Patio - Close to nothing!',
  'Large bright walk up~Upgraded finishes~',
  'Walking distance to Starbucks, Sprouts',
  'Quartz countertops, Guest parking',
  'Bright, quiet house for rent',
  'Lovely fresh lower duplex',
  'Luxury Home',
  '@@*GREAT LOCATION*@@ BOOK NOW',
  'This Three Bedroom Has Everything You Need',
  'Remarkable Value! Unbeatable Location! ',
  'MODERN AND CLASSY HOME',
  'My Home',
  'Brick Home',
  'Luxury Treehouse',
  'Lovely cabin',
  'Not so haunted mansion',
  'Re-outfitted home in great location',
  'Middle of no where home. Modern look',
  'Adorable cottage',
  'SPACIOUS home in suburbs',
  'Townhouse lots of Steps Away from everything',
  'Stunning rebulit home! John wick stayed here.',
  'Luxury Home. can be urs',
  'CHEAP housing outfitted with desk',
  'REMODELED HOME',
  'Rundown church rebulit to home',
  'In the middle of no where home',
  'Voted most boringest place',
  'Nothing ever happens at this house',
  'A home with TV with only CNN',
  'Wifi-less area, very little signal, mansion',
  'Cat mansion. Theres cats everywhere',
  'Home close to grocery stores . Small area',
  'Smart home in remote location',
  'Great place for a secret meeting',
  'Lose your mind in boredom at this house',
  'Great views at small home',
  'The GREAT PALACE',
  'Excellence in boredom. West Manor',
  'no pets. Rundown shack',
  'Nothing near here. Big home',
  'This place is like the moon. empty.',
  'Boredom to a new level! Big home!',
  'Home at mostly empty neighborhood.',
  'Great historical spot. Bird manor.'
]


function randomCoords(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10000;
}
function coordinatesGen(type, city) {
  let res = null
  switch (city) {
    case 'Stockton':
      type === 'lat' ? res = randomCoords(379277, 379777) : res = randomCoords(-1213207, -1212707)
      break
    case 'San Bernardino':
      type === 'lat' ? res = randomCoords(340883, 341283) : res = randomCoords(-1173097, -1172797)
      break
    case 'Plano':
      type === 'lat' ? res = randomCoords(329898, 330298) : res = randomCoords(-966788, -967288)
      break
    case 'Lubbock':
      type === 'lat' ? res = randomCoords(335478, 335978) : res = randomCoords(-1018851, -1018351)
      break
    case 'Cheasapeak':
      type === 'lat' ? res = randomCoords(367890, 368390) : res = randomCoords(-762949, -762549)
      break
    case 'Fort Wayne':
      type === 'lat' ? res = randomCoords(411006, 411606) : res = randomCoords(-851088, -851788)
      break

  }
  return res
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    function price() {
      return Math.floor(Math.random() * 501) + 50
    }
    let city = ['Stockton', 'San Bernardino', 'Plano', 'Lubbock', 'Cheasapeak', 'Fort Wayne']
    let state = ['CA', 'CA', 'TX', 'TX', 'VA', 'IN']
    let count = 0
    let secondCount = 0
    let places = []
    const users = await User.findAll()
    for (let i = 0; i < 7; i++) {
      users.map((user) => {
        let lat = coordinatesGen('lat', city[count])
        let long = coordinatesGen('long', city[count])
        places.push({
          name: title[secondCount],
          hostId: user.id,
          price: price(),
          address: faker.address.streetAddress(),
          city: city[count],
          state: state[count],
          lat,
          long,
          country: 'United States',
          description: desc[secondCount]
        })
        count === 5 ? count = 0 : count++
        secondCount === 49 ? secondCount = 0 : secondCount++
      })

    }
    return queryInterface.bulkInsert('Places', places);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Places', {
    }, {});
  }
};