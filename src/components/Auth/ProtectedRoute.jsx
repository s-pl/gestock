import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';





function ProtectedRoute() {
  const { currentUser } = useAuth(); // obtain the currentUser from the auth context. If no user is logged = null
  const rNumber = Math.round(Math.random()) // returns 1 or 0

  let navigate = null;

  if(rNumber == 0) {
    navigate = "/login"
  } else {
    navigate = "/register"
  }

  if (!currentUser) {
    return <Navigate to={navigate} replace />;
  }

 
  return <Outlet />;
}

export default ProtectedRoute;