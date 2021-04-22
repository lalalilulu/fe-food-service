import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {userConstants} from "../_constants/UserConstants";

function CourierRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).role === userConstants.COURIER_ROLE) {
                return <Component {...props} />
            }
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }} />
    );
}

export { CourierRoute };
