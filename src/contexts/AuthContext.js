import React, { createContext, useEffect, useState } from 'react';
import * as authAPI from '../api/auth';
import * as supabaseAuth from '../api/supabaseAuth';

const USE_SUPABASE = !!process.env.REACT_APP_SUPABASE_URL && !!process.env.REACT_APP_SUPABASE_ANON_KEY;

export const AuthContext = createContext({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function init() {
      if (USE_SUPABASE) {
        try {
          const user = await (supabaseAuth.getUser() || null);
          if (mounted && user) setUser(user);
          // subscribe to auth changes
          supabaseAuth.onAuthStateChange((event, u) => {
            if (mounted) setUser(u || null);
          });
        } catch (e) {
          // fallback to local session
          const session = authAPI.getSession();
          if (mounted && session) setUser(session);
        }
      } else {
        const session = authAPI.getSession();
        if (mounted && session) setUser(session);
      }
    }
    init();
    return () => { mounted = false; };
  }, []);

  const login = async (creds) => {
    if (USE_SUPABASE) {
      const u = await supabaseAuth.signIn(creds);
      setUser(u);
      return u;
    }
    const u = await authAPI.login(creds);
    setUser(u);
    return u;
  };

  const register = async (creds) => {
    if (USE_SUPABASE) {
      const u = await supabaseAuth.signUp(creds);
      setUser(u);
      return u;
    }
    const u = await authAPI.register(creds);
    setUser(u);
    return u;
  };

  const logout = () => {
    if (USE_SUPABASE) {
      supabaseAuth.signOut().catch(() => {});
    } else {
      authAPI.logout();
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
