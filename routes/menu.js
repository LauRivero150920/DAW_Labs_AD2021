const express = require('express');

const isAuth = require('../util/is-out');

const menuController = require('../controllers/menu_controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/list/:platillo_id', menuController.getList);

router.get('/list', menuController.getList);

router.get('/add', isAuth, menuController.getAdd);

router.post('/add', isAuth, menuController.postAdd);

module.exports = router;