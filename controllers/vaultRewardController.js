const { calculatePayouts } = require('../lib/vaultReward');

exports.distribute = (req, res) => {
  const amount = parseFloat(req.query.amount) || 1337;
  const payouts = calculatePayouts(amount);
  res.json({ amount, payouts });
};
