const { findOrCreate, updateXP } = require('../lib/userMemory');
const { getTier, getNextXP, getRitualFlag } = require('../lib/xpEngine');

exports.getUser = (req, res) => {
  const id = req.params.id;
  const user = findOrCreate(id);
  const xp = user.xp;
  res.json({
    ...user,
    tier: getTier(xp),
    nextXP: getNextXP(xp),
    ritualReady: getRitualFlag(xp),
  });
};

exports.addXP = (req, res) => {
  const id = req.params.id;
  const { delta } = req.body;
  const updated = updateXP(id, delta);
  const xp = updated.xp;
  res.json({
    ...updated,
    tier: getTier(xp),
    nextXP: getNextXP(xp),
    ritualReady: getRitualFlag(xp),
  });
};
