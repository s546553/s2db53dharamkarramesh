/*
var express = require('express');
var router = express.Router();


const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
*/
var express = require('express');
const roasted_controlers= require('../controllers/roasted');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roasted', { title: 'Search Results roasted class' });
});



//var express = require('express');
//const roasted_controlers= require('../controllers/roasted');
var router = express.Router();
/* GET costumes */
router.get('/', roasted_controlers.roasted_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', roasted_controlers.roasted_view_one_Page);

/* GET create bakery page */
//router.get('/create',secured, roasted_controlers.roasted_create_Page);
router.get('/create',roasted_controlers.roasted_create_Page);


/* GET create update page */
//router.get('/update',secured, roasted_controlers.roasted_update_Page);
router.get('/update',roasted_controlers.roasted_update_Page);

/* GET create bakery page */
//router.get('/delete',secured, roasted_controlers.roasted_delete_Page);

router.get('/delete',roasted_controlers.roasted_delete_Page);

