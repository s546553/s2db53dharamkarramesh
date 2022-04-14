var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bakery_controller = require('../controllers/roasted');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/roasted', roasted_controller.roasted_create_post);
// DELETE request to delete bakery.
router.delete('/roasted/:id', roasted_controller.roasted_delete);
// PUT request to update bakery.
router.put('/roasted/:id', roasted_controller.roasted_update_put);
// GET request for one bakery.
router.get('/roasted/:id', roasted_controller.roasted_detail);
// GET request for list of all bakery items.
router.get('/roasted', roasted_controller.roasted_list);
module.exports = router;