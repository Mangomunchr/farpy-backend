const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/weatherController');

router.get('/status', ctrl.status);
router.post('/roll', ctrl.roll);

module.exports = router;
