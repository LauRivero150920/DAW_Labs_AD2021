const express = require('express');

const menuController = require('../controllers/menu_controller');

const router = express.Router();
router.get('/list', menuController.getList);

router.get('/add', menuController.getAdd);

router.post('/add', menuController.postAdd);

module.exports = router;