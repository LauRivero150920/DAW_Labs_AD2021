const express = require('express');

const usersController = require('../controllers/users_controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/login', usersController.getLogin);

router.post('/login', usersController.postLogin);

router.get('/logout', usersController.getLogout);

//router.post('/add', usersController.postAdd);

module.exports = router;