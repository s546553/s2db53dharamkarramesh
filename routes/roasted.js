var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roasted', { title: 'Search Results roasted class' });
});


module.exports = router;
