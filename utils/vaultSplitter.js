// Mango10.5 - Calculates shard payouts based on burn weight
module.exports = function splitVaultPayout(totalCoolbeans, multiplier) {
  return totalCoolbeans * 0.8 * multiplier;
};