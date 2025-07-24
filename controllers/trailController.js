const { readTrail, appendTrail } = require('../lib/vaultTrail');

exports.get = (req, res) => res.json(readTrail());
exports.add = (req, res) => {
  const log = req.body;
  const updated = appendTrail(log);
  res.json(updated);
};
