const { readUsers, writeUsers } = require('./userMemory');
const { getBurn } = require('./burnDrift');
const { getLockState } = require('./chaosLock');
const { getWeather } = require('./vaultWeather');

function adjustXP(userId, baseXP = 10, summonTier = 1) {
  const users = readUsers();
  const burn = getBurn().burn;
  const lock = getLockState();
  const weather = getWeather();

  if (!users[userId]) users[userId] = { xp: 0 };

  if (lock.locked) {
    return { userId, gained: 0, locked: true, totalXP: users[userId].xp };
  }

  const burnPenalty = burn > 70 ? -Math.floor(baseXP * 0.5)
                   : burn > 40 ? -Math.floor(baseXP * 0.2)
                   : 0;

  const summonBonus = summonTier > 1 ? Math.floor(baseXP * ((summonTier - 1) * 0.1)) : 0;

  const weatherBonus = (weather.event === "Mango Monsoon" || weather.event === "Chaos Pulse")
    ? Math.floor(baseXP * 0.5)
    : 0;

  const actualXP = Math.max(0, baseXP + burnPenalty + summonBonus + weatherBonus);

  users[userId].xp = (users[userId].xp || 0) + actualXP;

  writeUsers(users);
  return {
    userId,
    gained: actualXP,
    burnPenalty,
    summonBonus,
    weatherBonus,
    totalXP: users[userId].xp
  };
}

module.exports = { adjustXP };
