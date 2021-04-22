import {orderConstants} from "../_constants/OrderConstants";

export function orders(state = {}, action) {
    switch (action.type) {
        case orderConstants.CREATE_ORDER_SUCCESS:
            return {
                state
            };
        case orderConstants.CREATE_ORDER_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
