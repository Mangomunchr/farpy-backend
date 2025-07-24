const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../userMemory.json');

function readUsers() {
  if (!fs.existsSync(FILE)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function writeUsers(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function findOrCreate(id) {
  let users = readUsers();
  let user = users.find(u => u.id === id);
  if (!user) {
    user = {
      id,
      role: id.startsWith('node') ? 'NodeMonk' : 'Rendar',
      xp: 0,
      jobs: 0,
      created: Date.now(),
    };
    users.push(user);
    writeUsers(users);
  }
  return user;
}

function updateXP(id, delta) {
  const users = readUsers();
  const user = users.find(u => u.id === id);
  if (user) {
    user.xp += delta;
    writeUsers(users);
  }
  return user;
}

module.exports = { readUsers, writeUsers, findOrCreate, updateXP };
