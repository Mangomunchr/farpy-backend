let rendar = {
  id: 'RND-009',
  jobsSubmitted: 0,
  jobsSucceeded: 0,
  jobsFailed: 0,
};

exports.getRendarStats = (req, res) => {
  res.json(rendar);
};

exports.submitJob = (req, res) => {
  rendar.jobsSubmitted++;
  const success = Math.random() > 0.1;
  if (success) rendar.jobsSucceeded++;
  else rendar.jobsFailed++;

  res.json({ result: success ? '✅ Success' : '❌ Fail', ...rendar });
};
