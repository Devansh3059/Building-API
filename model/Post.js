var mongoose = require("mongoose");

//Schema
var PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

//ahh yes Mongoose

module.exports = mongoose.model('Posts',PostSchema);
