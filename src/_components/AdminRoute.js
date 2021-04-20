import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {userConstants} from "../_constants/UserConstants";

function AdminRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (localStorage.getItem('user') && localStorage.getItem('user').role === userConstants.ADMIN_ROLE) {
                return <Component {...props} />
            }
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }} />
    );
}

export { AdminRoute };
