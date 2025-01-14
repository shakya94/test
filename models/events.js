const mongoose= require('mongoose');

const eventSchema = new  mongoose.Schema({
    name:{type:String},
    url:{type:String},
    desc:{type:String}
});

module.exports = mongoose.model('event',eventSchema);