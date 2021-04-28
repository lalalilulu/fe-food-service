import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../_actions/UserActions";

function GoogleAuth({children}) {

    const dispatch = useDispatch();

    //init auth2 for google authentication
    const _onInit = auth2 => {
        console.log('init OK', auth2)
    }
    const _onError = err => {
        console.log('error', err)
    }

    window.gapi.load('auth2', function () {
        window.gapi.auth2
            .init({
                client_id:
                process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
            .then(_onInit, _onError)
    });

     function handleClick() {

        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            const profile = googleUser.getBasicProfile();
            dispatch(userActions.loginSocialNetworks(profile.getName(), profile.getEmail()));
        });
    }

    return (
        <button type="button" className="sn-button" onClick={handleClick}>{children}</button>
    );
}

export default GoogleAuth;
