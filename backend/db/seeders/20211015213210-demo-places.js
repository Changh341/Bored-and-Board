'use strict';
const faker = require('faker');
const weightedGenerator = require('../weightedGen')
const randomAddress = faker.address.streetAddress()

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Places', [
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      }, {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },
      {
        name: weightedGenerator('title'),
        hostId: 1,
        price: weightedGenerator('cost'),
        address: weightedGenerator('address'),
        city: weightedGenerator('city'),
        state: weightedGenerator('state'),
        country: 'United States',
        description: weightedGenerator('describe')
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Places', {
    }, {});
  }
};