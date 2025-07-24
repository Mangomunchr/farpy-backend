const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bootController');

router.get('/status', ctrl.status);
router.post('/trigger', ctrl.trigger);

module.exports = router;
