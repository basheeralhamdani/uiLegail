import supabase from './supabaseClient';

function ensure() {
  if (!supabase) throw new Error('Supabase is not configured. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY');
}

export async function signUp({ email, password, options }) {
  ensure();
  const res = await supabase.auth.signUp({ email, password, options });
  if (res.error) throw res.error;
  return res.data?.user || res.data;
}

export async function signIn({ email, password }) {
  ensure();
  const res = await supabase.auth.signInWithPassword({ email, password });
  if (res.error) throw res.error;
  return res.data?.user || res.data;
}

export async function signOut() {
  ensure();
  const res = await supabase.auth.signOut();
  if (res.error) throw res.error;
  return true;
}

export function getUser() {
  if (!supabase) return null;
  const session = supabase.auth.getSession ? null : null; // placeholder for older/newer SDKs
  const user = supabase.auth.user ? supabase.auth.user() : null;
  // Safer approach: use getUser asynchronous call
  return user;
}

export function onAuthStateChange(cb) {
  if (!supabase) return () => {};
  const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
    cb(event, session?.user || null);
  });
  return () => {
    if (listener && listener.subscription) listener.subscription.unsubscribe();
  };
}
