const Todos = require('../models/Todos');

const register = async (req, res) => {
    const todo = { userId, title, completed } = req.body;
       
    try {
        const savedTodo = await Todos.create(todo);  
        res.json(savedTodo);
    } catch (error) {
        res.status(403).json({message: 'Todo could not created.', error:err});
    }
};

const find = async (req, res) => {
    const id = req.params.id;
    try {       
        const data = await Todos.find({ userId:id }); 
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'Todos could not found.', error:err});
    }
}

const findAll = async (req, res) => {
    try {
        const data = await Todos.find();    
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'Todos could not found.', error:err});
    }
}

const remove = async (req, res) => {
    const id = req.params.id;
    try {       
        const data = await Todos.remove({_id:id});  
        
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'Todo could not remove.', error:err});
    }
}

const update = async (req, res) => {
    const todo = {_id, userId, title, completed } = req.body;
    try {       
        const data = await Todos.updateOne({_id:todo._id}, { $set: todo});  
        
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'Todo could not update.', error:err});
    }
}

module.exports = {
    register,
    find,
    findAll,
    remove,
    update
}