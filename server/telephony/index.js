#!/usr/bin/env node
/*
  Simple telephony orchestrator scaffold for local development.
  - POST /calls/start  => stubbed call initiation (returns callId)
  - POST /telephony/webhook/twilio => accepts Twilio webhooks (signature verification TODO)
  - POST /telephony/simulate => broadcast a sequence of events to connected WS clients
  - WebSocket server broadcasts events to connected clients

  Dev-only scaffold: do NOT use in production. Use env vars for real credentials.
*/

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { WebSocketServer } = require('ws');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.TELEPHONY_PORT || 3002;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('[telephony] ws client connected');
  ws.on('close', () => {
    clients.delete(ws);
    console.log('[telephony] ws client disconnected');
  });
});

function broadcast(event) {
  const data = JSON.stringify(event);
  for (const ws of clients) {
    if (ws.readyState === ws.OPEN) ws.send(data);
  }
}

// Simple in-memory calls map for scaffolding
const calls = new Map();

app.post('/calls/start', (req, res) => {
  const { matterId, phone, attorneyId } = req.body || {};
  const callId = crypto.randomBytes(8).toString('hex');
  const call = { callId, matterId, phone, status: 'queued', createdAt: Date.now() };
  calls.set(callId, call);
  // Broadcast queued status
  broadcast({ type: 'call.status', callId, status: 'queued' });
  // For mock scaffold, simulate dialing
  setTimeout(() => {
    call.status = 'in-progress';
    broadcast({ type: 'call.status', callId, status: 'in-progress' });
    // Optionally auto-send a simulated partial transcript
  }, 800);

  res.json({ callId, status: call.status });
});

// Twilio webhook receiver (signature verification should be added for prod)
app.post('/telephony/webhook/twilio', (req, res) => {
  console.log('[telephony] twilio webhook:', req.body || req.query);
  // For now: acknowledge
  res.sendStatus(200);
});

// Simulate a sequence of events for dev/E2E tests
app.post('/telephony/simulate', (req, res) => {
  const { callId, events } = req.body || {};
  if (!callId || !Array.isArray(events)) return res.status(400).json({ error: 'callId and events[] required' });
  (async () => {
    for (const ev of events) {
      broadcast(Object.assign({ callId }, ev));
      // honor optional delay
      if (ev.delayMs) await new Promise((r) => setTimeout(r, ev.delayMs));
    }
  })();
  res.json({ ok: true });
});

// Simple health
app.get('/health', (req, res) => res.json({ ok: true, clients: clients.size }));

server.listen(PORT, () => console.log(`[telephony] server listening on http://localhost:${PORT}`));
