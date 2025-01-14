const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    text:{type:String},
    images:{type: String}
});

module.exports = mongoose.model('about',aboutSchema);
