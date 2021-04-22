import { history } from '../_helpers/History';
import { messagesActions } from './MessagesActions';
import {orderConstants} from "../_constants/OrderConstants";
import {orderService} from "../_services/OrderService";

export const orderActions = {
    create
};

function create(order) {
    return dispatch => {

        orderService.create(order)
            .then(
                () => {
                    dispatch(success());
                    history.push("/orders");
                    messagesActions.success('Your order request is processed. We have started preparing it');
                },
                error => {
                    dispatch(failure(error.toString()));
                    messagesActions.error(error.toString());
                }
            );
    };

    function success() { return { type: orderConstants.CREATE_ORDER_SUCCESS } }
    function failure(error) { return { type: orderConstants.CREATE_ORDER_FAILURE, error } }
}
