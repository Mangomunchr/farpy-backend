const { payout } = require('../lib/vaultPayout');

exports.claim = (req, res) => {
  const { id, summon } = req.body;
  const result = payout(id, summon || 1);
  res.json(result);
};
