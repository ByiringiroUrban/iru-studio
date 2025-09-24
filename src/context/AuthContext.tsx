import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type User = { id: string; name: string; email: string; role: 'USER' | 'ADMIN' } | null;

type AuthContextType = {
  user: User;
  token: string | null;
  login: (token: string, user?: User) => void;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('fts_token'));
  const [user, setUser] = useState<User>(null);

  const refreshMe = async () => {
    if (!token) { setUser(null); return; }
    try {
      const res = await fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) { throw new Error('not ok'); }
      const data = await res.json();
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => { refreshMe(); }, [token]);

  const login = (t: string, u?: User) => {
    localStorage.setItem('fts_token', t);
    setToken(t);
    if (u) setUser(u);
  };

  const logout = () => {
    localStorage.removeItem('fts_token');
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ user, token, login, logout, refreshMe }), [user, token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};


