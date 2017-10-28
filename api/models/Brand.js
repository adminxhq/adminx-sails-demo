/**
 * Brand.js
 *
 * @description :: Brand of car maker
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // SailsJS schema configuration (mandatory for SailsJS framework)
  attributes: {
    name: { type: 'string' },
  },

  // Additional AdminX configuration (optional)
  // Here you can define how AdminX displays and manipulates your data
  adminx: {
    attributes: {
      name: { list: true }
    }
  }
};
