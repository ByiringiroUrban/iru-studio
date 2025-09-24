import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Register: React.FC = () => {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [pendingUserId, setPendingUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const raw = await res.text();
      const data = raw ? JSON.parse(raw) : {};
      if (!res.ok) throw new Error(data.error || 'Register failed');
      // expect { pending: true, userId }
      setPendingUserId(data.userId);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingUserId) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: pendingUserId, otp })
      });
      const raw = await res.text();
      const data = raw ? JSON.parse(raw) : {};
      if (!res.ok) throw new Error(data.error || 'Verification failed');
      login(data.token, data.user);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      {!pendingUserId ? (
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white rounded-xl shadow-card p-6 space-y-4">
        <h1 className="text-2xl font-bold text-studio-navy">Register</h1>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <input className="w-full border rounded px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</Button>
        <div className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-primary">Login</a></div>
      </form>
      ) : (
      <form onSubmit={onVerify} className="w-full max-w-md bg-white rounded-xl shadow-card p-6 space-y-4">
        <h1 className="text-2xl font-bold text-studio-navy">Verify Account</h1>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <p className="text-gray-600 text-sm">We sent a 6-digit code to your email. Enter it below to verify your account.</p>
        <input className="w-full border rounded px-3 py-2 tracking-widest text-center" placeholder="Enter OTP" value={otp} onChange={e=>setOtp(e.target.value)} />
        <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Verifying...' : 'Verify'}</Button>
      </form>
      )}
    </div>
  );
};

export default Register;


