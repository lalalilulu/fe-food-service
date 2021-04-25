
export const cartService = {
    add,
    remove,
    clear
};

function add(item, amount) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({item, amount})
    };

    return fetch("http://localhost:3000/menu/addToCart", requestOptions).then(handleResponse);
}

function remove(item, amount) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({item, amount})
    };

    return fetch("http://localhost:3000/menu/removeFromCart", requestOptions).then(handleResponse);
}

function clear() {
    localStorage.removeItem('cart');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
