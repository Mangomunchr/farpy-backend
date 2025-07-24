const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../vaultTrail.json');

function readTrail() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function appendTrail(entry) {
  const logs = readTrail();
  const stamped = { ...entry, time: Date.now() };
  const updated = [stamped, ...logs].slice(0, 100);
  fs.writeFileSync(FILE, JSON.stringify(updated, null, 2));
  return updated;
}

module.exports = { readTrail, appendTrail };
