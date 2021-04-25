import {cartService} from "../_services/CartService";
import {cartConstants} from "../_constants/CartConstants";
import {messageActions} from "./MessageActions";

export const cartActions = {
    addToCart,
    removeFromCart,
    clear
};

function addToCart(item, amount) {
    return dispatch => {

        cartService.add(item, amount)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} (${amount} ${amount === 1 ? 'item' : 'items'}) successfully added to the cart`));
                    return true;
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                    return false;
                }
            );
    };

    function success(items) { return { type: cartConstants.ADD_TO_CART_SUCCESS, items }}
    function failure(error) { return { type: cartConstants.ADD_TO_CART_FAILURE, error }}
}

function removeFromCart(item, amount) {
    return dispatch => {

        cartService.remove(item, amount)
            .then(
                items => {
                    dispatch(success(items));
                    dispatch(messageActions.success(`${item.name} (${amount} ${amount === 1 ? 'item' : 'items'}) successfully removed from the cart`));
                    return true;
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                    return false;
                }
            );
    };

    function success(items) { return { type: cartConstants.REMOVE_FROM_CART_SUCCESS, items }}
    function failure(error) { return { type: cartConstants.REMOVE_FROM_CART_FAILURE, error }}
}

function clear() {
    cartService.clear();
    return { type: cartConstants.CLEAR_CART }
}
