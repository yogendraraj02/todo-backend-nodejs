const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description : {
        type : String,
        require : true
    },
    status : {
        type : String,
        requre : true
    },
    
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Todo',todoSchema);