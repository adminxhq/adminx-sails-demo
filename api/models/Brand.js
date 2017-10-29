/**
 * Brand.js
 *
 * @description :: Brand of car maker
 */

module.exports = {

  /* SailsJS schema configuration
   * (mandatory for SailsJS framework) */
  attributes: {
    name: { type: 'string' },
  },

  /* AdminX configuration
   * This configuration is optional
   * Here you can define how AdminX
   * displays and helps you edit your data */
  adminx: {
    attributes: {
      name: { list: true }
    }
  }
};
