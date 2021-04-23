import { messagesConstants } from '../_constants/MessageConstants';

export function notification(state = {}, action) {
    switch (action.type) {
        case messagesConstants.SUCCESS:
            return {
                type: messagesConstants.SUCCESS,
                message: action.message
            };
        case messagesConstants.ERROR:
            return {
                type: messagesConstants.ERROR,
                message: action.message
            };
        case messagesConstants.CLEAR:
            return {};
        default:
            return state
    }
}
