import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { animated } from 'react-spring';
import useStyles from './styles/index.js';
import useRouter from 'context/useRouter.js';
import { Routes } from './routes.js';
import RouteGen from './utils/RoutesGen';
import useRoutesAnimation from './animation.js';

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
          <div className={classes.authHeader}>
            <RouteGen routes={Routes} componentKey="HeaderComponent" />
          </div>
          <div className={classes.authBodyCarouselWrapper}>
            {transitions.map(({ item, props, key }) => {
              return (
                <animated.div
                  key={key}
                  className={classes.authCarouselItem}
                  style={props}
                >
                  <RouteGen
                    routes={Routes}
                    location={item}
                    componentKey="BodyComponent"
                  />
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
