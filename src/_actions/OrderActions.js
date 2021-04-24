import { history } from '../_helpers/History';
import { messageActions } from './MessageActions';
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
                (orders) => {
                    dispatch(success(orders));
                    history.push("/menu");
                    dispatch(messageActions.success('Your order request is processed. We have started preparing it'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(orders) { return { type: orderConstants.CREATE_ORDER_SUCCESS, orders } }
    function failure(error) { return { type: orderConstants.CREATE_ORDER_FAILURE, error } }
}

function assign(id) {
    return dispatch => {

        orderService.assign(id)
            .then(
                (orders) => {
                    dispatch(success(orders));
                    dispatch(messageActions.success('Courier assigned'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(orders) { return { type: orderConstants.ASSIGN_ORDER_SUCCESS, orders }}
    function failure(error) { return { type: orderConstants.ASSIGN_ORDER_FAILURE, error }}
}

function deliver(id) {
    return dispatch => {

        orderService.deliver(id)
            .then(
                (orders) => {
                    dispatch(success(orders));
                    dispatch(messageActions.success('Delivery confirmed'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(messageActions.error(error.toString()));
                }
            );
    };

    function success(orders) { return { type: orderConstants.DELIVER_ORDER_SUCCESS, orders } }
    function failure(error) { return { type: orderConstants.DELIVER_ORDER_FAILURE, error } }
}
