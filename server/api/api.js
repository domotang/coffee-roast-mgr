var router = require('express').Router();

router.use('/beans', require('./bean/router'));

module.exports = router;