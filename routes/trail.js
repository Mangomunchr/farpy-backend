const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/trailController');

router.get('/', ctrl.get);
router.post('/add', ctrl.add);

module.exports = router;
