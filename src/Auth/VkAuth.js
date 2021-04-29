import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../_actions/UserActions";
import {messageActions} from "../_actions/MessageActions";

function VkAuth({children}) {

    const dispatch = useDispatch();

    window.VK.init({
        apiId: process.env.REACT_APP_VK_APP_ID
    });

     function handleClick() {

          window.VK.Auth.login(response => {
             if (response.session) {
                 const name = response.session.user.first_name + ' ' + response.session.user.last_name;
                 const email = response.session.user.email;
                 dispatch(userActions.loginSocialNetworks(name, email));
             }
             else {
                 dispatch(messageActions.error('Error: App cannot obtain data for login'));
             }
         }, 4194304); //access to user's email
    }

    return (
        <button type="button" className="sn-button" onClick={handleClick}>{children}</button>
    );
}

export default VkAuth;
