const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../vaultMemory.json');

function readMemory() {
  if (!fs.existsSync(FILE)) {
    return { xp: 0, chaosLevel: 0.1, logs: [] };
  }
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function writeMemory(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

module.exports = { readMemory, writeMemory };
