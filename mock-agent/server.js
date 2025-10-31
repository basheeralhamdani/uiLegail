// Simple mock caller-agent server
// - POST /emit  -> broadcast a single agent event to connected WebSocket clients
// - POST /simulate -> simulate a sequence of answers for a matter
// WebSocket clients connect to ws://localhost:4000

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Frontend connected to mock-agent');
  ws.send(JSON.stringify({ type: 'connected', text: 'mock-agent connected' }));
});

function broadcast(obj) {
  const msg = JSON.stringify(obj);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) client.send(msg);
  });
}

// Emit single event
app.post('/emit', (req, res) => {
  const payload = req.body;
  if (!payload || !payload.type) return res.status(400).json({ error: 'invalid payload' });
  console.log('Emit', payload);
  broadcast(payload);
  res.json({ ok: true });
});

// Simulate a sequence of answers for a matterId
app.post('/simulate', (req, res) => {
  const { matterId, answers } = req.body;
  if (!matterId || !Array.isArray(answers)) return res.status(400).json({ error: 'missing matterId or answers[]' });

  // schedule question/answer events
  answers.forEach((a, i) => {
    setTimeout(() => {
      const ev = { type: 'answer', questionKey: a.key, text: a.text, matterId };
      broadcast(ev);
      console.log('Simulated:', ev);
    }, 2000 * (i + 1));
  });

  res.json({ ok: true, scheduled: answers.length });
});

const PORT = process.env.MOCK_AGENT_PORT || 4000;
server.listen(PORT, () => console.log(`mock-agent listening on http://localhost:${PORT}`));
