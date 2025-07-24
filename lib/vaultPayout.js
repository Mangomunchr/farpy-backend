const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../vaultBank.json');

function getVault() {
  if (!fs.existsSync(FILE)) return { total: 10000 };
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function setVault(state) {
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
}

function payout(userId, summonTier = 1) {
  const vault = getVault();
  const base = 100;

  const multiplier = summonTier > 1 ? 1 + (summonTier - 1) * 0.1 : 1;
  const reward = Math.floor(base * multiplier);

  vault.total = Math.max(0, vault.total - reward);
  setVault(vault);

  return { userId, reward, summonTier, vaultRemaining: vault.total };
}

module.exports = { payout, getVault };
