const express = require('express');
const router = express.Router();
const monk = require('../controllers/nodeMuncherController');

router.get('/top', monk.getTopMonks);

module.exports = router;
