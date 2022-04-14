var roasted = require('../models/roasted');
// List of all roasted items
exports.roasted_list = function(req, res) {
 res.send('NOT IMPLEMENTED: roasted list');
};
// for a specific Roasted item.
exports.roasted_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: roasted detail: ' + req.params.id);
};
// Handle rroasted  create on POST.
exports.roasted_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: roasted create POST');
};
// Handle Costume delete form on DELETE.
exports.roasted_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: roasted  delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.roasted_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: roasted  update PUT' + req.params.id);
};


// List of all Costumes
exports.roasted_list = async function(req, res) {
    try{
    theRoasted = await roasted.find();
    res.send(theRoasted);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };