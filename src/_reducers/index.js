import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import { users } from './UsersReducer';
import { alert } from './AlertReducer';
import { cart } from './CartReducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    cart
});

export default rootReducer;
