const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },    
    title : {
        type : String,
        required : true
    },
    completed : 
    {
        type : Boolean,
        required : true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;