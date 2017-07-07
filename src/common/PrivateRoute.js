import React from 'react';
import authHelper from '../helpers/authHelper';
import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={routeProps =>
    authHelper.isAuthenticated ? (
      <Component {...routeProps} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}
    )}
};

export default PrivateRoute;
