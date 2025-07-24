
// backend/routes/burnLog.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/burn-log', (req, res) => {
  const path = __dirname + '/../logs/coolbeansBurnLog.json';
  if (!fs.existsSync(path)) return res.json([]);
  const data = fs.readFileSync(path, 'utf8');
  res.json(JSON.parse(data));
});

module.exports = router;
