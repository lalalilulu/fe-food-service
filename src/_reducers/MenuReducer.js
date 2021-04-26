import {menuConstants} from "../_constants/MenuConstants";

const dishes = JSON.parse(localStorage.getItem('items')) || require("../_data/fooddata.json").data;
const initialState = {items: dishes, publishedItems: dishes.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)};

export function menu(state = initialState, action) {
    switch (action.type) {
        case menuConstants.ADD_SUCCESS:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.ADD_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.EDIT_SUCCESS:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.EDIT_FAILURE:
            return {
                error: action.error
            };
        case menuConstants.PREVIEW_ITEM:
            return {
                ...state,
                currentItem: action.item
            };
        case menuConstants.RESET_ITEM:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.SET_PUBLISH:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.SET_UNPUBLISH:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.SET_BLOCK:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        case menuConstants.SET_UNBLOCK:
            return {
                items: action.items,
                publishedItems: action.items.filter(item => item.status !== menuConstants.UNPUBLISHED_STATUS)
            };
        default:
            return state
    }
}
