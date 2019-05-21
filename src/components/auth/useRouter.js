import React, { useContext, useRef } from 'react';
import { __RouterContext, Redirect, Route } from 'react-router-dom';

export default function useRouter() {
  return useContext(__RouterContext);
}

export const PrivateRoute = ({
  component: Component,
  redirectPath,
  location,
  ...rest
}) => {
  let redirect = useRef(false);
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
