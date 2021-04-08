export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


export function addToCart(item, amount) {
    return {
        type : ADD,
        item,
        amount
    }
}

export function removeFromCart(item, amount) {
    return {
        type : REMOVE,
        item,
        amount
    }
}
