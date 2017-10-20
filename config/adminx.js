/**
 *  AdminX Configuration
 * (sails.config.adminx)
 *
 * Configure settings for AdminX
 *
 */

module.exports.adminx = {

  authEnabled: true,
  dataAuthToken: process.env.ADMINX_DATA_AUTH_KEY
};
