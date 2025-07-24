const { readMemory, writeMemory } = require('../lib/vaultMemory');

exports.getVaultStatus = (req, res) => {
  const memory = readMemory();
  res.json(memory);
};

exports.incrementXP = (req, res) => {
  const mem = readMemory();
  mem.xp += 100;
  mem.logs.unshift("XP gained +100 🔆");
  writeMemory(mem);
  res.json({ xp: mem.xp });
};

exports.toggleMutation = (req, res) => {
  const mem = readMemory();
  mem.chaosLevel = parseFloat((Math.random()).toFixed(3));
  mem.logs.unshift(`Chaos mutated → ${mem.chaosLevel}`);
  writeMemory(mem);
  res.json({ chaosLevel: mem.chaosLevel });
};

exports.getVaultLog = (req, res) => {
  const mem = readMemory();
  res.json(mem.logs.slice(0, 10));
};

exports.appendLog = (req, res) => {
  const { entry } = req.body;
  const mem = readMemory();
  mem.logs.unshift(entry);
  writeMemory(mem);
  res.json({ ok: true });
};
