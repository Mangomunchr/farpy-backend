const express = require('express');
const router = express.Router();
const { getTrail } = require('../lib/xpTrailLogger');

router.get('/trail', (req, res) => {
  res.json(getTrail());
});

module.exports = router;
