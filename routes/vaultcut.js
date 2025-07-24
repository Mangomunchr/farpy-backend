const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/vaultcutController');

router.post('/claim', ctrl.claim);

module.exports = router;
