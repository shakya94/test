const { url } = require('inspector');
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name:{ type:String},
    imageurl:{ type:String}
});

module.exports = mongoose.model('image',imageSchema);