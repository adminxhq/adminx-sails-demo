var Barrels = require('barrels');
var path = require('path');

module.exports.cron = {
  // ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']

  resetData: {
    schedule: '* */5 * * * *',
    start: true, // Start task immediately
    runOnInit: true, // Will fire your onTick function as soon as the requisit initialization has happened.
    onTick: function () {
      console.log('Doing data reset (this happens every 5 minutes)');

      var barrels = new Barrels(path.resolve('./fixtures'));
      var fixtures = barrels.data;
      barrels.populate(function (err) {
        console.log('Finished populating data', err);
      });

    }
  }
};
