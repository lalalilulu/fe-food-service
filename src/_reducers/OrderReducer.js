import {orderConstants} from "../_constants/OrderConstants";

let allOrders = JSON.parse(localStorage.getItem('orders'));
const initialState = allOrders ?  allOrders : [];

export function orders(state = initialState, action) {
    switch (action.type) {
        case orderConstants.CREATE_ORDER_SUCCESS:
            return {
                state
            };
        case orderConstants.CREATE_ORDER_FAILURE:
            return {
                error: action.error
            };
        case orderConstants.ASSIGN_ORDER_SUCCESS:
            return {
                state
            };
        case orderConstants.ASSIGN_ORDER_FAILURE:
            return {
                error: action.error
            };
        case orderConstants.DELIVER_ORDER_SUCCESS:
            return {
                state
            };
        case orderConstants.DELIVER_ORDER_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
