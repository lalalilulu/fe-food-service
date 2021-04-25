import {cartConstants} from "../_constants/CartConstants";

const cartStorage = JSON.parse(localStorage.getItem('cart'));
const emptyCart = { cartItems: [], total: 0 };
const cartInitialState = cartStorage ?  cartStorage : emptyCart;

export function cart(state = cartInitialState, action) {
    switch (action.type) {
        case cartConstants.ADD_TO_CART_SUCCESS:
            return {
                cartItems: action.items,
                total: updateTotal(action.items)
            };
        case cartConstants.ADD_TO_CART_FAILURE:
            return {
                error: action.error
            };
        case cartConstants.REMOVE_FROM_CART_SUCCESS:
            return {
                cartItems: action.items,
                total: updateTotal(action.items)
            };
        case cartConstants.REMOVE_FROM_CART_FAILURE:
            return {
                error: action.error
            };
        case cartConstants.CLEAR_CART:
            return {
               ...emptyCart
            };
        default :
            return state;
    }
}

function updateTotal(items) {
    if (items.length > 0) {
        let total = 0;
        items.every((item)=>
        {
            total += (item.price*item.amount);
            return total;
        });
        return total;
    } else {
        return 0;
    }
}
