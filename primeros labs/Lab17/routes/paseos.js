const express = require('express');

const paseosController = require('../controllers/paseos_controller');

const router = express.Router();
router.get('/inicio', paseosController.getInicio);

router.get('/destinos', paseosController.getDestinos);

router.get('/contacto', paseosController.getContacto);

router.get('/unity', paseosController.getUnity);

module.exports = router;