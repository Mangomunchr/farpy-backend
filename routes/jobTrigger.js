const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/jobTriggerController');

router.post('/run', ctrl.trigger);

module.exports = router;
