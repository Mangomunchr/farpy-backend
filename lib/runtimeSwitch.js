const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../runtimeState.json');

function getState() {
  if (!fs.existsSync(FILE)) return { mode: "idle", updated: Date.now() };
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function setState(mode = "idle") {
  const state = { mode, updated: Date.now() };
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
  return state;
}

module.exports = { getState, setState };
