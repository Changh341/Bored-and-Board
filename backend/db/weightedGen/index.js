const { fakeDescription } = require('../fakeDescription');
const { fakeTitle } = require('../fakeTitles');
const faker = require('faker')

const weightedGenerator = (type) => {
  const roll = Math.floor(Math.random() * 101);
  if (type === 'city') {
    if (roll <= 40) {
      return faker.address.city()
    } else if (roll > 41 && roll <= 50) {
      return 'Stockton'
    } else if (roll > 51 && roll <= 60) {
      return 'San Bernadino'
    } else if (roll > 61 && roll <= 70) {
      return 'Plano'
    } else if (roll > 71 && roll <= 80) {
      return 'Lubbock'
    } else if (roll > 81 && roll <= 90) {
      return 'Cheasapeak'
    } else {
      return 'Fort Wayne'
    }
  }
  if (type === 'state') {
    if (roll <= 10) {
      return faker.address.stateAbbr()
    } else if (roll > 10 && roll <= 25) {
      return 'IN'
    }
    else if (roll > 25 && roll <= 50) {
      return 'CA'
    } else if (roll > 50 && roll <= 75) {
      return 'TX'
    } else {
      return 'VA'
    }
  }
  if (type === 'cost') {
    const price = Math.floor(Math.random() * 501) + 50
    return price
  }
  if (type === 'describe') {
    const halfRoll = Math.floor(roll / 2)
    return fakeDescription[halfRoll]
  }
  if (type === 'title') {
    const halfRoll = Math.floor(roll / 2)
    return fakeTitle[halfRoll]
  }
  if (type === 'address') {
    return faker.address.streetAddress()
  }

}
module.exports = weightedGenerator