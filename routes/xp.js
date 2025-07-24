const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/xpController');

router.post('/reward', ctrl.reward);

module.exports = router;
