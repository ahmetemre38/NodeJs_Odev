const Users = require('../models/Users');

const register = async (req, res) => {
    const user = {username,email,password} = req.body;
    // callback 
    // Users.create(user, (err, data)=> {
    //     if (err) res.status(403).json({message: 'User could not created.', error:err});
    //     res.json(data);
    // })

    // Promise
    // Users.create(user)
    //     .then(data => res.json(data))
    //     .catch(err => res.status(403).json({message: 'User could not created.', error:err}));

    // async await    
    try {
        const data = await Users.create(user);
        const savedUser = data.toObject();
        delete savedUser.password;

        res.json(savedUser);
    } catch (error) {
        res.status(403).json({message: 'User could not created.', error:err});
    }
};

const find = async (req, res) => {
    const id = req.params.id;
    try {       
        const data = await Users.findOne({_id:id});  
        const foundUser = data.toObject();
        delete foundUser.password;

        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'User could not found.', error:err});
    }
}

const findAll = async (req, res) => {
    try {
        const data = await Users.find();    
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'User could not found.', error:err});
    }
}

const remove = async (req, res) => {
    const id = req.params.id;
    try {       
        const data = await Users.remove({_id:id});  
        
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'User could not remove.', error:err});
    }
}

const update = async (req, res) => {
    const user = {_id, username, email, password } = req.body;
    try {       
        const data = await Users.updateOne({_id:user._id}, {user});  
        
        return res.json(data);
    } catch (error) {
        res.status(403).json({message: 'User could not update.', error:err});
    }
}

module.exports = {
    register,
    find,
    findAll,
    remove,
    update
}