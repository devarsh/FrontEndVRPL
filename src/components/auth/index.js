import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { animated } from 'react-spring';
import useStyles from './styles/index.js';
import useRouter from 'context/useRouter.js';
import { Routes } from './routes.js';
import useRoutesAnimation from './animation.js';
import { Switch, Route, Redirect } from 'react-router-dom';

const Auth = () => {
  const classes = useStyles();
  const { location } = useRouter();
  const transitions = useRoutesAnimation(location);
  if (window.location.pathname === '/') {
    return <Redirect to="/email" />;
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authWrapper}>
          {/*Header Components*/}
          <div className={classes.authHeader}>
            <Switch>
              {Routes.map(route => {
                const Component = route['HeaderComponent'];
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    render={props => <Component {...props} />}
                  />
                );
              })}
            </Switch>
          </div>
          {/*Body Component with Animation using React-Spring */}
          <div className={classes.authBodyCarouselWrapper}>
            {transitions.map(({ item, props, key }) => {
              console.log(item, key);
              return (
                <animated.div
                  key={key}
                  className={classes.authCarouselItem}
                  style={props}
                >
                  <Switch location={item}>
                    {Routes.map(route => {
                      const Component = route['BodyComponent'];
                      return (
                        <Route
                          key={route.key}
                          path={route.path}
                          render={props => <Component {...props} />}
                        />
                      );
                    })}
                  </Switch>
                </animated.div>
              );
            })}
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
