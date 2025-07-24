const { getLockState, triggerLock } = require('../lib/chaosLock');

exports.status = (req, res) => res.json(getLockState());
exports.lock = (req, res) => {
  const minutes = req.body.minutes || 5;
  res.json(triggerLock(minutes));
};
