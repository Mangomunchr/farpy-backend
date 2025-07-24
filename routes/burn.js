const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/burnController');

router.get('/status', ctrl.status);
router.post('/tick', ctrl.tick);
router.post('/cool', ctrl.cool);

module.exports = router;
