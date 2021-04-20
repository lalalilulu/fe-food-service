import { messagesConstants } from '../_constants/MessageConstants';

export const messagesActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: messagesConstants.SUCCESS, message };
}

function error(message) {
    return { type: messagesConstants.ERROR, message };
}

function clear() {
    return { type: messagesConstants.CLEAR };
}
