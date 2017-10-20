

module.exports = {

  'index': function (req, res) {
    Car.find()
      .then(function (cars) {
        return res.view('car-list', { cars:cars });
      })
      .then(res.serverError)
  }

}
