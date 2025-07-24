
// backend/utils/gpuPoller.js
// Mango10.6+ - Simulated GPU polling logic
module.exports = function getGPUMetrics() {
  return {
    name: 'NVIDIA RTX 4090',
    temperature: Math.floor(50 + Math.random() * 15),
    usage: Math.floor(20 + Math.random() * 80),
    fanSpeed: Math.floor(1500 + Math.random() * 800),
    memoryUsed: Math.floor(6 + Math.random() * 12)
  };
};
