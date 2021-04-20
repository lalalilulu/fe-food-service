import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import {registration} from "./RegistrationReducer";
import { users } from './UsersReducer';
import { cart } from './CartReducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    cart
});

export default rootReducer;
