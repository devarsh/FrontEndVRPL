import React from 'react'
import { BrowserRouter , Switch, Route } from "react-router-dom";
import useStyles from './styles.js'
import {Transition} from 'react-spring/renderprops'
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
              <Switch>
                <Route path="/login" render={props => LoginHeader({ ...props, classes })} />
                <Route path="/forgot" render={props => ForgotHeader({ ...props, classes })} />
              </Switch>
          </div>
            <Route
              children={({ location,history }) => (console.log(location,history)) || (
                <Transition
                  config={{}}
                  items={location}
                  keys={location.pathname}
                  initial={{ transform: 'translateX(0%)' }}
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
        </div>
      </div>
    </>
  )
}


const AuthRouter = () => (
  <BrowserRouter>
    <Auth/>
  </BrowserRouter>
)

export default AuthRouter
