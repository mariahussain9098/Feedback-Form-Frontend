import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated');

  return isAuthenticated ? element : <Navigate to="/admin-login" replace />;
};

export default AuthRoute;
