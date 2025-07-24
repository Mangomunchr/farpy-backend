const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../vaultWeather.json');

const CONDITIONS = [
  "Mango Monsoon",
  "Chompy Eclipse",
  "Vault Drift",
  "Silent Uptime",
  "Chaos Pulse",
  "Grid Shatter"
];

function getWeather() {
  if (!fs.existsSync(FILE)) {
    const base = { event: "Silent Uptime", updated: Date.now() };
    fs.writeFileSync(FILE, JSON.stringify(base, null, 2));
    return base;
  }
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function rollWeather() {
  const event = CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)];
  const state = { event, updated: Date.now() };
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2));
  return state;
}

module.exports = { getWeather, rollWeather };
