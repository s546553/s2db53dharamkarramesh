const mongoose = require("mongoose")
const RoastedSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
price: String
})
module.exports = mongoose.model("Roasted",
RoastedSchema)

// We can seed the collection if needed on
//server start
async function recreateDB(){
 // Delete everything

 await Roasted.deleteMany();
 let instance1 = new
Roasted({Itemname:"roasted sandwich", Quantity:90,
price:"Fifteen USD"});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}
