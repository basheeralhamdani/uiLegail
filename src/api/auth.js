// Minimal dev authentication API using localStorage.
// Not secure — intended for local development and testing only.

const USERS_KEY = 'dev_users_v1';
const SESSION_KEY = 'dev_auth_session_v1';

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function hashPwd(pwd) {
  // Simple, reversible encoding for dev only. Replace with proper hashing in prod.
  return btoa(pwd);
}

export async function register({ email, password, name, role }) {
  const users = loadUsers();
  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }
  // role can be 'attorney' or 'client' (default)
  const user = { id: Date.now().toString(), email, name: name || '', role: role || 'client', password: hashPwd(password) };
  users.push(user);
  saveUsers(users);
  // create session (include role)
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role }));
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}

export async function login({ email, password }) {
  const users = loadUsers();
  const hp = hashPwd(password);
  const user = users.find(u => u.email === email && u.password === hp);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role }));
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
