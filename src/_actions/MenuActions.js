import { history } from '../_helpers/History';
import {messageActions} from './MessageActions';
import {menuService} from "../_services/MenuService";
import {menuConstants} from "../_constants/MenuConstants";
import {userService} from "../_services/UserService";
import {userConstants} from "../_constants/UserConstants";

export const menuActions = {
    addItem,
    editItem,
    getItem,
    getAll,
    publish,
    unpublish,
    block,
    unblock
};

function addItem(item) {
    return dispatch => {

        menuService.add(item)
            .then(
                item => {
                    dispatch(success(item));
                    history.push('/menu');
                    dispatch(messageActions.success(`${item.name} successfully added to the menu`));
                    return true;
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                    return false;
                }
            );
    };

    function success(item) { return { type: menuConstants.ADD_SUCCESS, item }}
    function failure(error) { return { type: menuConstants.ADD_FAILURE, error }}
}

function editItem(item) {
    return dispatch => {

        menuService.edit(item)
            .then(
                item => {
                    dispatch(success(item));
                    history.push('/menu');
                    dispatch(messageActions.success(`${item.name} successfully updated`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.EDIT_SUCCESS, item }}
    function failure(error) { return { type: menuConstants.EDIT_FAILURE, error }}
}

function getAll() {
    return dispatch => {

        menuService.getAll()
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error.toString()))
            );
    };

    function success(items) { return { type: menuConstants.GETALL_SUCCESS, items } }
    function failure(error) { return { type: menuConstants.GETALL_FAILURE, error } }
}

function getItem(id) {
    return dispatch => {

        menuService.getById(id)
            .then(
                item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.GET_ITEM_SUCCESS, item }}
    function failure(error) { return { type: menuConstants.GET_ITEM_FAILURE, error }}
}

function publish(item) {
    return dispatch => {

        menuService.publish(item)
            .then(
                item => {
                    dispatch(success(item));
                    dispatch(messageActions.success(`${item.name} successfully published`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.PUBLISH_SUCCESS, item } }
    function failure(error) { return { type: menuConstants.PUBLISH_FAILURE, error } }
}

function unpublish(item) {
    return dispatch => {

        menuService.unpublish(item)
            .then(
                item => {
                    dispatch(success(item));
                    dispatch(messageActions.success(`${item.name} successfully unpublished`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.UNPUBLISH_SUCCESS, item } }
    function failure(error) { return { type: menuConstants.UNPUBLISH_FAILURE, error } }
}

function block(item) {
    return dispatch => {

        menuService.block(item)
            .then(
                item => {
                    dispatch(success(item));
                    dispatch(messageActions.success(`${item.name} successfully blocked`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.BLOCK_SUCCESS, item } }
    function failure(error) { return { type: menuConstants.BLOCK_FAILURE, error } }
}

function unblock(item) {
    return dispatch => {

        menuService.unblock(item)
            .then(
                item => {
                    dispatch(success(item));
                    dispatch(messageActions.success(`${item.name} successfully unblocked`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.UNBLOCK_SUCCESS, item } }
    function failure(error) { return { type: menuConstants.UNBLOCK_FAILURE, error } }
}

