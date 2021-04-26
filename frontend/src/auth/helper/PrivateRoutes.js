import React from 'react'
import { Redirect, Route } from 'react-router'
import { isauthenticated } from '.'


const PrivateRoutes = ({component : Component , ...rest}) => {
    return (
       <Route
       {...rest}
        render={props => isauthenticated()? (
            <Component {...props}/>
        ) : (
            <Redirect
            to ={{
                pathname : "/signin",
                state: {from : props.location}
            }}
            />
        )
        
        }
       
       
       
       />
    )
}

export default PrivateRoutes
