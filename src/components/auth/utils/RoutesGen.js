import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (props) => {
  const { routes, componentKey, location } = props;
  if (!Array.isArray(routes)) {
    throw new Error('Routes should be any array but found ', routes);
  }
  return (
    <Switch location={location || null}>
      {routes.map((route) => {
        const Component = route[componentKey];
        return (
          <Route
            key={route.key}
            path={route.path}
            render={(props) => <Component {...props} />}
          />
        );
      })}
    </Switch>
  );
};
