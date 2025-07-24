const { readUsers, writeUsers } = require('./userMemory');
const { readJobs } = require('./jobQueue');

function calculateRanks() {
  const users = readUsers();
  const jobs = readJobs();

  const jobMap = {};
  jobs.forEach(job => {
    if (!jobMap[job.user]) jobMap[job.user] = { success: 0, fail: 0 };
    if (job.success) jobMap[job.user].success++;
    else jobMap[job.user].fail++;
  });

  const scored = users.map(u => {
    const stats = jobMap[u.id] || { success: 0, fail: 0 };
    const score = u.xp + stats.success * 10 - stats.fail * 5;
    return { id: u.id, role: u.role, xp: u.xp, jobs: stats, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 100);
}

module.exports = { calculateRanks };
