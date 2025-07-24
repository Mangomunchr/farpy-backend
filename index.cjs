const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let jobQueue = [];
let vault = 0;
let jobLog = [];

app.post('/api/submit-job', (req, res) => {
  const { content, speed = 1, userType = "Rendar" } = req.body;
  const job = {
    jobId: jobQueue.length + 1,
    content,
    speed,
    timestamp: Date.now(),
    userType
  };
  jobQueue.push(job);
  jobLog.push(job);
  vault += 0.10 * speed;
  res.send({ success: true });
});

app.get('/api/fetch-jobs', (req, res) => {
  res.send(jobQueue.slice(-10).reverse());
});

app.get('/api/job-log', (req, res) => {
  res.send(jobLog.slice(-50));
});

app.get('/api/vault', (req, res) => {
  res.send({ earnings: vault });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
