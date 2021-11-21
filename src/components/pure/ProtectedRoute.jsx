import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...restOfProps}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/register" />)}
    />
  );
}

export default ProtectedRoute;
