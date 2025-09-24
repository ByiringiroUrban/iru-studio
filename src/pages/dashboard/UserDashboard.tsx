import React from 'react';
import { useAuth } from '@/context/AuthContext';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-studio-navy">Welcome, {user?.name || 'User'}</h1>
      <p className="text-gray-600 mt-2">This is your dashboard. More features coming soon.</p>
    </div>
  );
};

export default UserDashboard;


