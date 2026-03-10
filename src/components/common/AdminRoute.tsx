import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { ReactNode } from "react";

export default function AdminRoute({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
