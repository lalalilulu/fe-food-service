
export const menuService = {
    add,
    edit,
    getById,
    getAll,
    publish,
    unpublish,
    block,
    unblock
};

function add(item) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch("http://localhost:3000/menu/addItem", requestOptions).then(handleResponse);
}

function edit(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch(`http://localhost:3000/menu/edit/${item.id}`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:3000/menu/${id}`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch("http://localhost:3000/menu", requestOptions).then(handleResponse);
}

function publish(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch(`http://localhost:3000/menu/publish/${item.id}`, requestOptions).then(handleResponse);
}

function unpublish(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch(`http://localhost:3000/menu/unpublish/${item.id}`, requestOptions).then(handleResponse);
}

function block(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch(`http://localhost:3000/menu/block/${item.id}`, requestOptions).then(handleResponse);
}

function unblock(item) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    return fetch(`http://localhost:3000/menu/unblock/${item.id}`, requestOptions).then(handleResponse);
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
