import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = false; // Replace with your actual authentication logic

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default PublicRoute;
