import {userService} from "../_services/UserService";
import { history } from '../_helpers/History';
import { userConstants } from '../_constants/UserConstants';
import { messageActions } from './MessageActions';

export const userActions = {
    register,
    login,
    logout,
    update
};

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                () => {
                    dispatch(success());
                    history.push('/signin');
                    dispatch(messageActions.success('You have successfully registered'));
                    return true;
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                    return false;
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success() { return { type: userConstants.REGISTER_SUCCESS } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(email, password, from) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push(from);
                    dispatch(messageActions.success('You have successfully logged in to food delivery app'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT }
}

function update(user) {
    return dispatch => {
        dispatch(request(user));

        userService.update(user)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(messageActions.success('Your profile has been successfully updated'));
                    return true;
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                    return false;
                }
            );
    };

    function request(user) { return { type: userConstants.UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}
