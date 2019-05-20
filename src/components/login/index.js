import React, { useRef } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import useStyles from './styles.js'
import {useTransition, animated} from 'react-spring'
//import LinearProgress from '@material-ui/core/LinearProgress';
import Routes, {PathIndex} from './routes.js'
import useRouter from './useRouter.js'
import PrivateRoute from './components/protected.js'





const Auth = () =>   {
  const classes = useStyles()
  const { location } = useRouter()
  let previous = useRef(null)
  let direction = useRef(1)
  const transitions = useTransition(location, location.pathname, {
    initial: loc => { 
      if (previous.current === null) {
        previous.current = PathIndex(loc.pathname)
      }
      return {transform: 'translateX(0%)'}
    },
    from: loc => {
      const currentState = PathIndex(loc.pathname)
      direction = currentState < previous.current ? -1 : 1
      previous.current = currentState
      return { transform: `translateX(${100 * direction}%)`}
    },
    enter: { transform: 'translateX(0%)'},
    leave: {transform: `translateX(${-100 * direction}%)`},
    })
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authWrapper}>
          {/*<LinearProgress className={classes.linerProgress} />*/}
          <div className={classes.authHeader}>
              <Switch>
                {Routes.map((route) => (
                  route.protected ? (
                    <PrivateRoute key={route.key} path={route.path} component={props => route.HeaderComponent({ ...props, classes })} />
                  ) : (
                    <Route key={route.key} path={route.path} render={props => route.HeaderComponent({ ...props, classes })} />
                  )
                  ))}
              </Switch>
          </div>
          <div className={classes.authBodyCarouselWrapper}> 
          {transitions.map(({ item, props, key })=> (
            <animated.div key={key} className={classes.authCarouselItem} style={props}>
            <Switch location={item}>
            {Routes.map((route) => (
              route.protected ? (
                <PrivateRoute key={route.key} path={route.path} component={props => route.BodyComponent({ ...props, classes })} />
              ) : (
                <Route key={route.key} path={route.path} render={props => route.BodyComponent({ ...props, classes })} />
              )
            ))}
            </Switch>
          </animated.div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}


 
 const AuthRouter = () => {
  return (<BrowserRouter>
    <Auth/>
  </BrowserRouter>)
 }

export default AuthRouter