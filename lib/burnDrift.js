const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../burnDrift.json');

function getBurn() {
  if (!fs.existsSync(FILE)) return { burn: 0, updated: Date.now() };
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function updateBurn(delta = 1.5) {
  const current = getBurn();
  const newBurn = Math.min(100, current.burn + delta);
  const updated = { burn: newBurn, updated: Date.now() };
  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));
  return updated;
}

function coolBurn(amount = 5) {
  const current = getBurn();
  const cooled = Math.max(0, current.burn - amount);
  const updated = { burn: cooled, updated: Date.now() };
  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));
  return updated;
}

module.exports = { getBurn, updateBurn, coolBurn };
