import React from 'react';
import { useAuth } from '@/context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-studio-navy">Admin Panel</h1>
      <p className="text-gray-600 mt-2">Welcome, {user?.name}. Manage site content and users here.</p>
    </div>
  );
};

export default AdminDashboard;


