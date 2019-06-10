var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var beanSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  region: String,
  altitude: Number
});

var model = mongoose.model('bean', beanSchema);

module.exports = model;