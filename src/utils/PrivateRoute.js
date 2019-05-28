import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  redirectPath,
  location,
  ...rest
}) => {
  let redirect = React.useRef(false);
  if (redirect.current === true) {
    return null;
  } else {
    return (
      <Route
        {...rest}
        render={props => {
          /*redirect.current = true //need to put conditional logic*/
          return redirect.current ? (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: props.location }
              }}
            />
          ) : (
            Component({ ...props })
          );
        }}
      />
    );
  }
};

export default PrivateRoute;
