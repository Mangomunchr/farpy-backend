const { readUsers } = require('./userMemory');
const { readJobs } = require('./jobQueue');

function calculatePayouts(vaultTotal = 1337.00) {
  const users = readUsers();
  const jobs = readJobs();

  const contributions = {};
  jobs.forEach(j => {
    if (!contributions[j.user]) contributions[j.user] = 0;
    contributions[j.user] += j.success ? 10 : 2;
  });

  const totalWeight = Object.values(contributions).reduce((a, b) => a + b, 0);
  if (totalWeight === 0) return [];

  return Object.entries(contributions).map(([user, weight]) => {
    const cut = (vaultTotal * weight) / totalWeight;
    return {
      id: user,
      weight,
      payout: parseFloat(cut.toFixed(3))
    };
  }).sort((a, b) => b.payout - a.payout);
}

module.exports = { calculatePayouts };
