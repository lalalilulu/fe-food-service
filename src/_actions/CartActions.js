export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVE_ALL = 'REMOVE_ALL';

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

export function removeAll() {
    return {
        type : REMOVE_ALL
    }
}
