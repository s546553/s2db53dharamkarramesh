const mongoose = require("mongoose")
const roastedSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
price: String
})
module.exports = mongoose.model("roasted",
roastedSchema)
