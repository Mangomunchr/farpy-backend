const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/:id', user.getUser);
router.post('/:id/xp', user.addXP);

module.exports = router;
