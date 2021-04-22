import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import {registration} from "./RegistrationReducer";
import { users } from './UsersReducer';
import { notification } from './MessageReducer';
import { cart } from './CartReducer';
import {orders} from "./OrdersReducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    orders,
    notification,
    cart
});

export default rootReducer;
