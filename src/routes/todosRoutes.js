const express = require('express');
const router = express.Router();

const {register, find, findAll, remove, update } = require('../services/todoService.js')

router.get('/:id', find);
router.get('/', findAll);
router.post('/register', register);
router.delete('/:id', remove);
router.patch('/:id', update);

module.exports = router;