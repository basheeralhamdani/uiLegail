# Legail Telephony Scaffold

This directory contains a small development-only telephony orchestrator used to prototype voice intake flows.

Files

- `index.js` — Express server exposing `/calls/start`, `/telephony/webhook/twilio`, and `/telephony/simulate`. Also starts a WebSocket server that broadcasts events to connected clients.
- `mockRelay.js` — helper to produce sample simulated events used by tests.

Usage (dev)

1. From `uiLegail` folder install dependencies if needed: `npm install` (the frontend already has `express`, `ws`, etc. in devDependencies).
2. Start the server:

   ```powershell
   cd uiLegail
   npm run telephony-server
   ```

3. Connect a WebSocket client to `ws://localhost:3002` and listen for events. Use `POST /telephony/simulate` to broadcast events to connected clients.

Security & Notes

- This scaffold is explicitly development-only. Do not use this server in production. Add proper Twilio signature verification, authentication, HTTPS, and storage before production use.
