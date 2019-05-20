import React, {useRef} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    let redirect = useRef(false)
    if (redirect.current === null) {
        redirect.current = false
    }
    if (redirect.current === true) {
        return null
    } else {
        return (
            <Route {...rest} 
            render={props => {
                redirect.current = true
                return true ? <Redirect to={{
                    pathname:'/login',
                    state: {from : props.location}
                    }}/> : Component({...props})
            }}/>
        )
    }
    
}

export default PrivateRoute