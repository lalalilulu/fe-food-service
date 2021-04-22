import { history } from '../_helpers/History';
import { messagesActions } from './MessagesActions';
import {orderConstants} from "../_constants/OrderConstants";
import {orderService} from "../_services/OrderService";

export const orderActions = {
    create,
    assign,
    deliver
};

function create(order) {
    return dispatch => {

        orderService.create(order)
            .then(
                () => {
                    dispatch(success());
                    history.push("/menu");
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

function assign(id) {
    return dispatch => {

        orderService.assign(id)
            .then(
                () => {
                    dispatch(success());
                    messagesActions.success('Courier assigned');
                },
                error => {
                    dispatch(failure(error.toString()));
                    messagesActions.error(error.toString());
                }
            );
    };

    function success() { return { type: orderConstants.ASSIGN_ORDER_SUCCESS } }
    function failure(error) { return { type: orderConstants.ASSIGN_ORDER_FAILURE, error } }
}

function deliver(id) {
    return dispatch => {

        orderService.deliver(id)
            .then(
                () => {
                    dispatch(success());
                    messagesActions.success('Delivery confirmed');
                },
                error => {
                    dispatch(failure(error.toString()));
                    messagesActions.error(error.toString());
                }
            );
    };

    function success() { return { type: orderConstants.DELIVER_ORDER_SUCCESS } }
    function failure(error) { return { type: orderConstants.DELIVER_ORDER_FAILURE, error } }
}
