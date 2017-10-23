/**
 * Car.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: { type: 'string' },
    model: { type:'string' },
    brand: { type: 'string' },
    year: { type: 'integer', min: 2000, max: 2019 },
    price: { type: 'float', min: 0 },
    available: { type: 'boolean' },
    summary: { type: 'string' },
    thumbnail: { type: 'string' },
    cover: { type: 'string' },
    extras: { type: 'array' },
    doorConfiguration: { type: 'string', enum: ['2 Doors', '3 Doors', '4 Doors', '5 Doors', '6 Doors'] },
    history: { type: 'longtext' },
    metaData: { type: 'json' },
  },

  adminx: {
    name: 'Car',
    attributes: {
      id: {  },
      name: { list: true },
      model: { list: true },
      brand: {  },
      thumbnail: { },
      createdAt: { },
      updatedAt: { list: true },
    }
  }
};
