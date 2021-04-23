import {menuConstants} from "../_constants/MenuConstants";

export function menu(state = {}, action) {
    switch (action.type) {
        case menuConstants.ADD_SUCCESS:
            return {};
        case menuConstants.ADD_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.EDIT_SUCCESS:
            return {};
        case menuConstants.EDIT_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.GETALL_SUCCESS:
            return {
                items: action.items
            };
        case menuConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.GET_ITEM_SUCCESS:
            return {
                currentItem: state.items.find(item => item.id === action.id)
            };
        case menuConstants.GET_ITEM_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.PUBLISH_SUCCESS:
            return {
                currentItem: action.item
            };
        case menuConstants.PUBLISH_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.UNPUBLISH_SUCCESS:
            return {
                currentItem: action.item
            };
        case menuConstants.UNPUBLISH_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.BLOCK_SUCCESS:
            return {
                currentItem: action.item
            };
        case menuConstants.BLOCK_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.UNBLOCK_SUCCESS:
            return {
                currentItem: action.item
            };
        case menuConstants.UNBLOCK_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
