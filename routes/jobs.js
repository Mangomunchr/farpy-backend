const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/jobController');

router.post('/submit', ctrl.submit);
router.get('/user/:id', ctrl.forUser);
router.get('/all', ctrl.all);

module.exports = router;
