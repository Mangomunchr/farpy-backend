
// backend/routes/gpuStatus.js
const express = require('express');
const router = express.Router();
const getGPUMetrics = require('../utils/gpuPoller');

router.get('/gpu-status', (req, res) => {
  const metrics = getGPUMetrics();
  res.json(metrics);
});

module.exports = router;
