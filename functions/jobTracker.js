// Simulated job tracking system (in-memory MVP)

let jobs = [
  { id: "job1", name: "Test Render A", speed: "1x", claimedBy: null },
  { id: "job2", name: "Test Render B", speed: "1x", claimedBy: null }
];

let userXP = {
  "nodeMonk1": 120,
  "rendar1": 50
};

export function getAvailableJobs() {
  return jobs.filter(job => !job.claimedBy);
}

export function claimJob(jobId, userId) {
  const job = jobs.find(j => j.id === jobId);
  if (job && !job.claimedBy) {
    job.claimedBy = userId;
    userXP[userId] = (userXP[userId] || 0) + 10; // +10 XP per job
    return { success: true, newXP: userXP[userId] };
  }
  return { success: false, reason: "Already claimed or not found" };
}

export function getUserXP(userId) {
  return userXP[userId] || 0;
}
