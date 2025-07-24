const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/sauranController');

router.post('/swarm', ctrl.swarm);

module.exports = router;
