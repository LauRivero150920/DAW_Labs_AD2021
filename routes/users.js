const express = require('express');

const usersController = require('../controllers/menu_controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/login', usersController.getList);

router.post('/login', usersController.getList);

router.get('/add', usersController.getAdd);

router.post('/add', usersController.postAdd);

module.exports = router;