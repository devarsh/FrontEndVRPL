import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { animated } from 'react-spring';
import useStyles from 'styles/index.js';
//import LinearProgress from '@material-ui/core/LinearProgress';
import useRouter from 'context/useRouter.js';
import RoutesGen from 'utils/RoutesGen';
import { Routes } from './routes.js';
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
            <RoutesGen Routes={Routes} componentKey="HeaderComponent" />
          </div>
          <div className={classes.authBodyCarouselWrapper}>
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                className={classes.authCarouselItem}
                style={props}
              >
                <RoutesGen
                  location={item}
                  Routes={Routes}
                  componentKey="BodyComponent"
                />
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
