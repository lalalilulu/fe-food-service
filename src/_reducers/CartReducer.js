import {ADD, REMOVE} from '../_actions/CartActions';

let initialState = {
    inventory: require("../data/fooddata.json").data,
    cartItems: [],
    total: 0
};

export function cart(state = initialState, action) {
    switch (action.type) {
        case ADD :
            console.log(state.cartItems);
            let alreadyInCart = false;
            if(state.cartItems.length>0) {
                state.cartItems = state.cartItems.map((item) => {
                    console.log(item.id + " " + action.item.id);
                    if (item.id === action.item.id) {
                        item.amount += action.amount;
                        alreadyInCart=true;
                    }
                    return item;
                });

                console.log(state.cartItems);
            }

            if(!alreadyInCart)
            {
                state.cartItems.push({
                    id: action.item.id,
                    item: action.item,
                    price: action.item.price,
                    amount: action.amount
                });
            }
            updateTotal(state);
            //apart from cart state all objects of state remains same
            return {
                ...state,
                [action.cartItems] : state.cartItems
            };

        case REMOVE :
            console.log("Food Item to be removed: "+ action.item.id);
            let index = -1;
            state.cartItems.every((item) => {
                if(item.id === action.item.id) {
                    index= state.cartItems.indexOf(item);
                }
                return index;
            });
            if(index !== -1) {
                const foundItem = state.cartItems[index];
                if(foundItem.amount > action.amount) {
                    foundItem.amount -= action.amount;
                    console.log(state.cartItems);
                } else {
                    state.cartItems.splice(index, 1);
                    console.log(state.cartItems);
                }
            }
            updateTotal(state);
            return {
                ...state,
                [action.cartItems] : state.cartItems
            };
        default :
            return state;
    }
}

function updateTotal(state) {
    if (state.cartItems.length > 0) {
        console.log(state.cartItems);
        console.log(state.cartItems.length);
        let total = 0;
        state.cartItems.every((item)=>
        {
            total += (item.price*item.amount);
            return total;
        });
        console.log("total amount: " + total);
        state.total = total;
    } else {
        state.total = 0;
    }
    return state;
}
