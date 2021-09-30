const mongoose = require("mongoose");
const addhotel = new mongoose.Schema({
    name: {type: String, required: true},
    place: {type: String, required: true},
    emailid:{type: String, required: true}
})
const Hotel = mongoose.model("Hotel", addhotel)
module.exports = Hotel;