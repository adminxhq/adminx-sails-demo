
module.exports = {

  'index': function (req, res) {
    Car.find()
      .populateAll()
      .sort('updatedAt desc')
      .then(function (cars) {
        return res.view('car-list', { cars:cars });
      })
      .catch(res.serverError)
    ;
  },

  'details': function (req, res) {
    var id = req.param('id');

    Car.findOneById(id)
      .populateAll()
      .then(function (car) {
        res.view('car-details', { car: car });
      })
      .catch(res.serverError)
    ;
  }

}
