const express = require('express');

const menuController = require('../controllers/menu_controller');

const router = express.Router();
router.get('/listaanimalito', menuController.getList);

router.get('/agregaranimalito', menuController.getAdd);

router.post('/agregaranimalito', menuController.postAdd);

module.exports = router;