const { adjustXP } = require('../lib/xpEngine');

exports.reward = (req, res) => {
  const { id, base, summon } = req.body;
  const result = adjustXP(id, base || 10, summon || 1);
  res.json(result);
};
