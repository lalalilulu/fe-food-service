import {authHeader} from "../_helpers/AuthHeader";

export const orderService = {
    create,
    assign,
    deliver
};

function create(order) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    };


    return fetch("http://localhost:3000/orders/create", requestOptions)
        .then(handleResponse);
}

function assign(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`http://localhost:3000/orders/assign/${id}`, requestOptions).then(handleResponse);
}

function deliver(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`http://localhost:3000/orders/deliver/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
