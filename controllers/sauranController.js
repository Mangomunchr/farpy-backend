const { shardJob } = require('../lib/sauranShard');

exports.swarm = (req, res) => {
  const { task } = req.body;
  const shards = shardJob(task || {});
  res.json({ shards });
};
