const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '../../rendarJobs.json');

function readJobs() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf-8'));
}

function writeJobs(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function submitJob(id) {
  const jobs = readJobs();
  const job = {
    id: `JOB-${jobs.length + 1}`,
    user: id,
    success: Math.random() > 0.12,
    created: Date.now(),
  };
  jobs.unshift(job);
  writeJobs(jobs.slice(0, 100)); // limit to 100 recent
  return job;
}

function getUserJobs(id) {
  return readJobs().filter(j => j.user === id);
}

module.exports = { submitJob, getUserJobs, readJobs };
