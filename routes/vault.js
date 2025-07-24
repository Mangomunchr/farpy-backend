const express = require('express');
const router = express.Router();
const vault = require('../controllers/vaultController');

router.get('/status', vault.getVaultStatus);
router.post('/gain-xp', vault.incrementXP);
router.post('/mutate', vault.toggleMutation);
router.get('/memory', vault.getVaultLog);
router.post('/write', vault.appendLog);

module.exports = router;
