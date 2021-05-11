const express = require('express');

const router = express.Router();

const todosData = require('../data/todosData');


router.get('/', (req, res) => {
    if (!req.query.userId)
        res.json(todosData);

    const { userId } = req.query;

    const todo = todosData.filter(item => item.userId == userId);
    res.json(todo)
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const result = todosData.filter(item => item.id != id);

    res.send({ message: result });
});


module.exports = router;