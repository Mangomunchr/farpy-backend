const express = require('express');
const router = express.Router();
const rendar = require('../controllers/rendarController');

router.get('/status', rendar.getRendarStats);
router.post('/submit', rendar.submitJob);

module.exports = router;
