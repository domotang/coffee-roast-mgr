var _ = require('lodash');
var mongoose = require('mongoose');
var config = require('./config/config');
var express = require('express');
var app = express();
var router = express.Router();

mongoose.connect(config.db.url, {useNewUrlParser: true})

require('./midware/midware')(app);


app.use('/', require('./api/api'));


module.exports = app;
