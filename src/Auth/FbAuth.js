import React from 'react';
import {useDispatch} from "react-redux";
import {messageActions} from "../_actions/MessageActions";
import {userActions} from "../_actions/UserActions";

function FbAuth({children}) {

    window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        xfbml: true,
        version: 'v10.0'
    });

    const dispatch = useDispatch();

    function handleClick() {

        window.FB.login(function (response) {
            console.log(response);
            if (response.status === 'connected') {
                const userID = response.authResponse.userID;
                window.FB.api('/'+userID+'/?fields=name,email', 'GET', {}, function (response) {
                    if (response.error) return dispatch(messageActions.error('Error: App cannot obtain data for login'));
                    const {name, email} = response;
                    console.log(name);
                    console.log(email);
                    dispatch(userActions.loginSocialNetworks(name, email));

                });
                //window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
            } else {
                dispatch(messageActions.error('Error: App cannot obtain data for login'));
            }
        }, {scope: 'public_profile,email', return_scopes: true});


    }

    return (
        <button type="button" className="sn-button" onClick={handleClick}>{children}</button>
    );
}

export default FbAuth;
