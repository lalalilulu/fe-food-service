import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../_actions/UserActions";
import {messageActions} from "../_actions/MessageActions";

function GoogleAuth({children}) {

    const dispatch = useDispatch();

    window.gapi.load('auth2', function () {
        window.gapi.auth2
            .init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
    });

     function handleClick() {

        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            const profile = googleUser.getBasicProfile();
            dispatch(userActions.loginSocialNetworks(profile.getName(), profile.getEmail()));
        }).catch(error => {
            console.log(error);
            dispatch(messageActions.error(error.toString()));
        });
    }

    return (
        <button type="button" className="sn-button" onClick={handleClick}>{children}</button>
    );
}

export default GoogleAuth;
