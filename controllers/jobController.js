const { submitJob, getUserJobs, readJobs } = require('../lib/jobQueue');

exports.submit = (req, res) => {
  const { id } = req.body;
  const job = submitJob(id);
  res.json(job);
};

exports.forUser = (req, res) => {
  const { id } = req.params;
  const jobs = getUserJobs(id);
  res.json(jobs);
};

exports.all = (req, res) => {
  res.json(readJobs());
};
