var bean = require('./model');

var get = function(req, res) {
  bean.find()
  .then(data => {
    res.json(data);
  })
};

var post = function(req, res) {
  var newBean = req.body;
  bean.create(newBean)
  .then(data => res.json(data))
};

module.exports = {
  get,
  post
}