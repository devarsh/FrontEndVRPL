import React from 'react';
import PrivateRoute from './PrivateRoute.js';
import { Switch, Route } from 'react-router-dom';

const RoutesGen = props => {
  const { Routes, componentKey, location } = props;
  if (!Array.isArray(Routes)) {
    throw new Error('Routes should be any array but found ', Routes);
  }
  return (
    <Switch location={location}>
      {Routes.map(route => {
        const Component = route[componentKey];
        return route.protected ? (
          <PrivateRoute
            key={route.key}
            path={route.path}
            redirectPath={route.redirect}
            component={props => <Component {...props} />}
          />
        ) : (
          <Route
            key={route.key}
            path={route.path}
            render={props => <Component {...props} />}
          />
        );
      })}
    </Switch>
  );
};

export default RoutesGen;
