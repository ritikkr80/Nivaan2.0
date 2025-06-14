
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mild-blue-50 via-mild-blue-100 to-mild-blue-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden animate-pulse">
            <img 
              src="/lovable-uploads/662c93ff-fa45-4284-a3f8-ef41f825ae54.png" 
              alt="Nivaan Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-mild-blue-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
