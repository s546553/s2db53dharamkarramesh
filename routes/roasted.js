var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roasted', { title: 'Search Results roasted class' });
});


//var express = require('express');
const roasted_controlers= require('../controllers/roasted');
var router = express.Router();
/* GET costumes */
router.get('/', roasted_controlers.roasted_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', bakery_controlers.bakery_view_one_Page);
