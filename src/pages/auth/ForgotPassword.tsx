import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState<'request' | 'confirm'>('request');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const request = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr(null); setMsg(null);
    try {
      const res = await fetch('/api/auth/forgot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error('Failed to send code');
      setMsg('We sent a reset code to your email.');
      setStep('confirm');
    } catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  };

  const confirm = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr(null); setMsg(null);
    try {
      const res = await fetch('/api/auth/reset', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, code, newPassword }) });
      if (!res.ok) throw new Error('Failed to reset password');
      setMsg('Password updated. You can now login.');
      setTimeout(() => { window.location.href = '/login'; }, 1200);
    } catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      {step === 'request' ? (
        <form onSubmit={request} className="w-full max-w-md bg-white rounded-xl shadow-card p-6 space-y-4">
          <h1 className="text-2xl font-bold text-studio-navy">Forgot Password</h1>
          {err && <div className="text-sm text-red-600">{err}</div>}
          {msg && <div className="text-sm text-green-600">{msg}</div>}
          <input className="w-full border rounded px-3 py-2" placeholder="Your email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Sending...' : 'Send code'}</Button>
        </form>
      ) : (
        <form onSubmit={confirm} className="w-full max-w-md bg-white rounded-xl shadow-card p-6 space-y-4">
          <h1 className="text-2xl font-bold text-studio-navy">Reset Password</h1>
          {err && <div className="text-sm text-red-600">{err}</div>}
          {msg && <div className="text-sm text-green-600">{msg}</div>}
          <input className="w-full border rounded px-3 py-2" placeholder="Code" value={code} onChange={e=>setCode(e.target.value)} />
          <input className="w-full border rounded px-3 py-2" placeholder="New password" type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
          <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Updating...' : 'Update password'}</Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;


