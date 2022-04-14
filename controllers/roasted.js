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


// Handle Costume create on POST.
exports.roasted_create_post = async function(req, res) {
 console.log(req.body)
 let document = new roasted();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.roasted_type = req.body.roasted_type;
 document.price = req.body.price;
 document.Quantity = req.body.Quantity;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
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

   // VIEWS
// Handle a show all view
exports.roasted_view_all_Page = async function(req, res) {
    try{
    theRoasted = await roasted.find();
    res.render('roasted', { title: 'Roasted Search Results', results: theRoasted });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };