import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const raw = await res.text();
      const data = raw ? JSON.parse(raw) : {};
      if (!res.ok) throw new Error(data.error || 'Login failed');
      login(data.token, data.user);
      window.location.href = data.user?.role === 'ADMIN' ? '/dashboard/admin' : '/dashboard';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white rounded-xl shadow-card p-6 space-y-4">
        <h1 className="text-2xl font-bold text-studio-navy">Login</h1>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Login'}</Button>
        <div className="text-sm text-gray-600">Forgot your password? <a href="/forgot" className="text-primary">Reset it</a></div>
      </form>
    </div>
  );
};

export default Login;


