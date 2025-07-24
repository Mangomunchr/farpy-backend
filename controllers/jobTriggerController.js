const { adjustXP } = require('../lib/xpEngine');
const { payout } = require('../lib/vaultPayout');
const { logXP } = require('../lib/xpTrailLogger');

exports.trigger = (req, res) => {
  const { id, summon, baseXP } = req.body;

  const xpResult = adjustXP(id, baseXP || 10, summon || 1);
  const vaultResult = payout(id, summon || 1);

  logXP(id, xpResult.gained, {
    burnPenalty: xpResult.burnPenalty,
    summonBonus: xpResult.summonBonus,
    reward: vaultResult.reward
  });

  res.json({
    success: true,
    id,
    xp: xpResult,
    payout: vaultResult
  });
};
