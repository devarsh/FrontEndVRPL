import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { animated } from 'react-spring';
import useStyles from './styles.js';
//import LinearProgress from '@material-ui/core/LinearProgress';
import Routes from './routes.js';
import useRouter, { PrivateRoute } from './useRouter.js';
import useRoutesAnimation from './animation.js';

const Auth = () => {
  const classes = useStyles();
  const { location } = useRouter();
  const transitions = useRoutesAnimation(location);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authWrapper}>
          {/*<LinearProgress className={classes.linerProgress} />*/}
          <div className={classes.authHeader}>
            <Switch>
              {Routes.map(route =>
                route.protected ? (
                  <PrivateRoute
                    key={route.key}
                    path={route.path}
                    redirectPath={route.redirect}
                    component={props => <route.HeaderComponent {...props} />}
                  />
                ) : (
                  <Route
                    exact
                    key={route.key}
                    path={route.path}
                    render={props => <route.HeaderComponent {...props} />}
                  />
                )
              )}
            </Switch>
          </div>
          <div className={classes.authBodyCarouselWrapper}>
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                className={classes.authCarouselItem}
                style={props}
              >
                <Switch location={item}>
                  {Routes.map(route =>
                    route.protected ? (
                      <PrivateRoute
                        key={route.key}
                        path={route.path}
                        redirectPath={route.redirect}
                        component={props => <route.BodyComponent {...props} />}
                      />
                    ) : (
                      <Route
                        exact
                        key={route.key}
                        path={route.path}
                        render={props => <route.BodyComponent {...props} />}
                      />
                    )
                  )}
                </Switch>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

export default AuthRouter;
