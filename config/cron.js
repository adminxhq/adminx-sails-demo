var Barrels = require('barrels');
var path = require('path');

var fixturesPath = path.resolve('./fixtures');
var imagesPath = path.resolve('./fixtures/images');

module.exports.cron = {
  // ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']

  resetData: {
    schedule: '0 */10 * * * *',
    start: true, // Start task immediately
    runOnInit: true, // Will fire your onTick function as soon as the requisit initialization has happened.
    onTick: function () {
      console.log('Doing data reset (this happens every 5 minutes)');

      var barrels = new Barrels(fixturesPath);
      var fixtures = barrels.data;

      new Promise(function (resolve, reject) {
          barrels.populate(['brand', 'car'], function (err) {
            console.log('Finished populating data', err || '');
            resolve();
          });
        })
        .then(function () {
          return S3Service.syncDir(imagesPath, '');
        })
        .catch(function (err) {
          console.log('Something failed while trying to populate fixtures');
        })
      ;

    }
  }
};
