const { readUsers } = require('./userMemory');

function shardJob(jobPayload = {}) {
  const shards = [];
  const nodes = readUsers().filter(u => u.role === 'NodeMonk');
  if (nodes.length === 0) return [];

  const split = Math.min(nodes.length, jobPayload.shardCount || 3);

  for (let i = 0; i < split; i++) {
    const node = nodes[i % nodes.length];
    shards.push({
      nodeId: node.id,
      shardId: \`SHD-\${Date.now()}-\${i}\`,
      payload: { ...jobPayload },
      assignedAt: Date.now(),
    });
  }

  return shards;
}

module.exports = { shardJob };
