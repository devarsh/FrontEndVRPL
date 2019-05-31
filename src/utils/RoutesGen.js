import React from 'react';
import { Switch, Route } from 'react-router-dom';

const RoutesGen = props => {
  const { Routes, componentKey, location } = props;
  if (!Array.isArray(Routes)) {
    throw new Error('Routes should be any array but found ', Routes);
  }
  return (
    <Switch location={location || null}>
      {Routes.map(route => {
        const Component = route[componentKey];
        return (
          <Route
            key={route.path}
            path={route.path}
            render={props => <Component {...props} />}
          />
        );
      })}
    </Switch>
  );
};

export default RoutesGen;
