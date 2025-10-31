// agentBridge: development helper to connect frontend to a mock caller-agent
// It connects to ws://localhost:4000 and forwards parsed JSON messages to a callback.
let ws = null;
let reconnectTimer = null;

export function startAgentBridge(onEvent, { url } = {}) {
  if (typeof window === 'undefined') return;
  const host = url || (window.__LEGAIL_MOCK_AGENT_URL || 'ws://localhost:4000');

  function connect() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    try {
      ws = new WebSocket(host);
    } catch (err) {
      console.warn('agentBridge: websocket error', err);
      scheduleReconnect();
      return;
    }

    ws.onopen = () => {
      console.log('agentBridge: connected to', host);
    };

    ws.onmessage = (ev) => {
      try {
        const payload = JSON.parse(ev.data);
        if (onEvent && typeof onEvent === 'function') onEvent(payload);
        // also forward to legacy global handler for compatibility
        if (window.__legailHandleAgentEvent) window.__legailHandleAgentEvent(payload);
      } catch (e) {
        console.warn('agentBridge: invalid payload', e);
      }
    };

    ws.onclose = () => {
      console.log('agentBridge: closed, will reconnect');
      scheduleReconnect();
    };

    ws.onerror = (err) => {
      console.warn('agentBridge: error', err);
      try { ws.close(); } catch (e) {}
    };
  }

  function scheduleReconnect() {
    if (reconnectTimer) return;
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      connect();
    }, 2000);
  }

  connect();

  return function stop() {
    if (reconnectTimer) clearTimeout(reconnectTimer);
    reconnectTimer = null;
    if (ws) {
      try { ws.close(); } catch (e) {}
      ws = null;
    }
  };
}

export default { startAgentBridge };
