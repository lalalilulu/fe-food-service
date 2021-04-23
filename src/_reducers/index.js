import { combineReducers } from 'redux';

import {authentication} from './CurrentUserReducer';
import {registration} from "./RegistrationReducer";
import {notification} from './MessageReducer';
import {cart} from './CartReducer';
import {orders} from "./OrderReducer";
import {menu} from "./MenuReducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    menu,
    orders,
    notification,
    cart
});

export default rootReducer;
