const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/chaosController');

router.get('/status', ctrl.status);
router.post('/lock', ctrl.lock);

module.exports = router;
