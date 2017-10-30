/**
 * Car.js
 *
 * @description :: Motorized vehicle with 4 wheels for individual and family transport
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  /* SailsJS schema configuration
   * Mandatory for SailsJS framework */
  attributes: {
    model: { type:'string' },
    brand: { model: 'brand' },
    year: { type: 'integer', min: 2000, max: 2019 },
    dailyRate: { type: 'float', min: 0 },
    availableAt: { type: 'date' },
    fullTank: { type: 'boolean' },
    summary: { type: 'mediumtext' },
    thumbnail: { type: 'string' },
    cover: { type: 'string' },
    extras: { type: 'array' },
    doorConfiguration: {
      type: 'string',
      enum: ['2 Doors', '3 Doors', '4 Doors', '5 Doors', '6 Doors']
    },
    history: { type: 'longtext' },
    metaData: { type: 'json' },
  },

  /* AdminX configuration
   * This configuration is optional
   * Here you can define how AdminX
   * displays and helps you edit your data */
  adminx: {
    name: 'Car',
    attributes: {
      id: { disabled: true },
      brand: { }, // Here for ordering
      model: { list: true },
      summary: { }, // Here for ordering
      thumbnail: { editor: 'input-url' },
      cover: { editor: 'input-url' },
      history: { editor: 'html-simple' },
      updatedAt: { list: true },
    }
  }
};
