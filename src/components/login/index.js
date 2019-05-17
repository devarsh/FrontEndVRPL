import React from 'react'
import { Transition } from 'react-spring/renderprops'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useStyles from './styles.js'

//import LinearProgress from '@material-ui/core/LinearProgress';
import Login, { LoginHeader } from './login.js'
import Forgot, { ForgotHeader } from './forgot.js'

const Auth = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authWrapper}>
          {/*<LinearProgress className={classes.linerProgress} />*/}
          <div className={classes.authHeader}>
            <Router>
              <Switch>
                <Route path="/login" render={props => LoginHeader({ ...props, classes })} />
                <Route path="/forgot" render={props => ForgotHeader({ ...props, classes })} />
              </Switch>
            </Router>
          </div>
          <Router>
            <Route
              children={({ location }) => (console.log(location)) || (
                <Transition
                  config={{ duration: 10000 }}
                  items={location}
                  keys={location.pathname}
                  initial={{ transform: 'translateX(100%)' }}
                  from={{ transform: 'translateX(100%)' }}
                  enter={{ transform: 'translateX(0%)' }}
                  leave={{ transform: 'translateX(-100%)' }}
                >
                  {item => style => (
                    <div className={classes.authBodyCarouselWrapper}>
                      <Switch location={location}>
                        <Route exact path="/login" render={props => Login({ ...props, style, classes })} />
                        <Route exact path="/forgot" render={props => Forgot({ ...props, style, classes })} />
                      </Switch>
                    </div>
                  )}
                </Transition>
              )} />
          </Router>
        </div>
      </div>
    </>
  )
}

export default Auth
