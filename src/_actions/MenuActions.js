import { history } from '../_helpers/History';
import {messageActions} from './MessageActions';
import {menuService} from "../_services/MenuService";
import {menuConstants} from "../_constants/MenuConstants";

export const menuActions = {
    addItem,
    editItem,
    resetEditing,
    previewItem,
    publish,
    unpublish,
    block,
    unblock
};

function addItem(item) {
    return dispatch => {

        menuService.add(item)
            .then(
                items => {
                    dispatch(success(items));
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

    function success(items) { return { type: menuConstants.ADD_SUCCESS, items }}
    function failure(error) { return { type: menuConstants.ADD_FAILURE, error }}
}

function editItem(item) {
    return dispatch => {

        menuService.edit(item)
            .then(
                items => {
                    dispatch(success(items));
                    history.push('/menu');
                    dispatch(messageActions.success(`${item.name} successfully updated`));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(items) { return { type: menuConstants.EDIT_SUCCESS, items }}
    function failure(error) { return { type: menuConstants.EDIT_FAILURE, error }}
}

function resetEditing() {
    return dispatch => {

        menuService.reset()
            .then(
                items => dispatch(success(items)),
            );
    };

    function success(items) { return { type: menuConstants.RESET_ITEM, items } }
}

function previewItem(item) {
    return dispatch => {

        menuService.preview(item)
            .then(
                item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function success(item) { return { type: menuConstants.PREVIEW_ITEM, item }}
    function failure(error) { return { type: menuConstants.PREVIEW_ITEM, error }}
}

function publish(item) {
    return dispatch => {

        menuService.publish(item)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} successfully published`));
                }
            );
    };

    function success(items) { return { type: menuConstants.SET_PUBLISH, items } }
}

function unpublish(item) {
    return dispatch => {

        menuService.unpublish(item)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} successfully unpublished`));
                }
            );
    };

    function success(items) { return { type: menuConstants.SET_UNPUBLISH, items } }
}

function block(item) {
    return dispatch => {

        menuService.block(item)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} successfully blocked`));
                }
            );
    };

    function success(items) { return { type: menuConstants.SET_BLOCK, items } }
}

function unblock(item) {
    return dispatch => {

        menuService.unblock(item)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} successfully unblocked`));
                }
            );
    };

    function success(items) { return { type: menuConstants.SET_UNBLOCK, items } }
}

