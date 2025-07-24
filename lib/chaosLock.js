const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../chaosLock.json');

function getLockState() {
  if (!fs.existsSync(FILE)) return { locked: false, until: null };
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function triggerLock(minutes = 5) {
  const until = Date.now() + minutes * 60000;
  const state = { locked: true, until };
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
  return state;
}

function checkLock() {
  const state = getLockState();
  if (state.locked && Date.now() > state.until) {
    const cleared = { locked: false, until: null };
    fs.writeFileSync(FILE, JSON.stringify(cleared, null, 2));
    return cleared;
  }
  return state;
}

module.exports = { getLockState: checkLock, triggerLock };
