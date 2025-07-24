// Final Summon Cast handler
const express = require('express');
const router = express.Router();
const fs = require('fs');
const getGPUMetrics = require('../utils/gpuPoller');
const vaultSplitter = require('../utils/vaultSplitter');

router.post('/submit-job', async (req, res) => {
  const { job_id, farpie_id, coolbeans, multiplier } = req.body;
  const payout = vaultSplitter(coolbeans, multiplier);
  const log = {
    job_id,
    submitted_by: farpie_id,
    coolbeans_burned: coolbeans,
    payout,
    multiplier,
    timestamp: new Date().toISOString()
  };
  const path = __dirname + '/../logs/coolbeansBurnLog.json';
  const data = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : [];
  data.push(log);
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  res.json({ status: 'success', payout });
});

module.exports = router;
