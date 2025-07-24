const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../bootFlag.json');

function getBoot() {
  if (!fs.existsSync(FILE)) return { booted: false, at: null };
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function setBoot() {
  const payload = { booted: true, at: Date.now() };
  fs.writeFileSync(FILE, JSON.stringify(payload, null, 2));
  return payload;
}

module.exports = { getBoot, setBoot };
