const express = require('express');

const isAuth = require('../util/is-out');

const usersController = require('../controllers/users_controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/login', usersController.getLogin);

router.post('/login', usersController.postLogin);

router.get('/logout', isAuth, usersController.getLogout);

router.get('/add', isAuth, usersController.getAdd);

router.post('/add', isAuth, usersController.postAdd);

module.exports = router;