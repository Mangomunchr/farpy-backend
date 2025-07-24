const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/runtimeController');

router.get('/status', ctrl.status);
router.post('/switch', ctrl.switch);

module.exports = router;
