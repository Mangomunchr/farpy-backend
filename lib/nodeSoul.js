const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../nodeSouls.json');

function readSouls() {
  if (!fs.existsSync(FILE)) return {};
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function writeSouls(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function imprint(id, action) {
  const souls = readSouls();
  if (!souls[id]) souls[id] = [];
  const stamp = { action, time: Date.now() };
  souls[id].unshift(stamp);
  writeSouls(souls);
  return souls[id].slice(0, 10);
}

function getSoul(id) {
  const souls = readSouls();
  return souls[id] || [];
}

module.exports = { imprint, getSoul };
