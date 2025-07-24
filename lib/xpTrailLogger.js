const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../xpTrail.json');

function logXP(userId, gained, meta = {}) {
  const entry = {
    time: Date.now(),
    user: userId,
    gained,
    ...meta
  };

  let trail = [];
  if (fs.existsSync(FILE)) {
    trail = JSON.parse(fs.readFileSync(FILE, 'utf-8'));
  }

  trail.unshift(entry);
  if (trail.length > 1000) trail = trail.slice(0, 1000);

  fs.writeFileSync(FILE, JSON.stringify(trail, null, 2));
}

function getTrail() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

module.exports = { logXP, getTrail };
