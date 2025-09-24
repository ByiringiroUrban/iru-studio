import React from 'react';
import { useAuth } from '@/context/AuthContext';

const Settings: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-studio-navy">Settings</h1>
      <div className="mt-6 bg-white rounded-xl shadow-card p-6 space-y-3">
        <div className="text-gray-700"><span className="font-semibold">Name:</span> {user?.name}</div>
        <div className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email}</div>
        <div className="text-gray-700"><span className="font-semibold">Role:</span> {user?.role}</div>
      </div>
    </div>
  );
};

export default Settings;


