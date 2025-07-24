const { calculateRanks } = require('../lib/nodeMuncher');

exports.getTopMonks = (req, res) => {
  const top = calculateRanks();
  res.json(top);
};
