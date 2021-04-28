import { userConstants } from '../_constants/UserConstants';
import {orderConstants} from "../_constants/OrderConstants";
import {menuConstants} from "../_constants/MenuConstants";

let users = JSON.parse(localStorage.getItem('users')) ||
    [{ id: 1, role: userConstants.ADMIN_ROLE, name: 'admin', password: 'admin', email: 'admin@test.com' },
     { id: 2, role: userConstants.COURIER_ROLE, name: 'courier', password: 'test', email: 'courier@test.com' }
    ];

let orders = JSON.parse(localStorage.getItem('orders')) || [];
let menuItems = JSON.parse(localStorage.getItem('items')) || require("../_data/fooddata.json").data;

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);
        const randomTimeout = Math.random() * (5000 - 3000) + 3000;

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, url.includes('users') ? randomTimeout : 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return login();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.match(/\/users\/\d+$/) && method === 'PUT':
                        return updateUser();
                    case url.endsWith('/authenticate/socialNetworks') && method === 'POST':
                        return loginSN();
                    case url.endsWith('/orders/create') && method === 'POST':
                        return createOrder();
                    case url.match(/\/orders\/assign\/\d+$/) && method === 'GET':
                        return assignOrder();
                    case url.match(/\/orders\/deliver\/\d+$/) && method === 'GET':
                        return deliverOrder();
                    case url.endsWith('/menu/addItem') && method === 'POST':
                        return addMenuItem();
                    case url.match(/\/menu\/edit\/\d+$/) && method === 'PUT':
                        return editMenuItem();
                    case url.endsWith('/menu/preview') && method === 'POST':
                        return preview();
                    case url.endsWith('menu/reset') && method === 'GET':
                        return reset();
                    case url.match(/\/menu\/publish\/\d+$/) && method === 'PUT':
                        return publishItem();
                    case url.match(/\/menu\/unpublish\/\d+$/) && method === 'PUT':
                        return unpublishItem();
                    case url.match(/\/menu\/block\/\d+$/) && method === 'PUT':
                        return blockItem();
                    case url.match(/\/menu\/unblock\/\d+$/) && method === 'PUT':
                        return unblockItem();
                    case url.endsWith('/menu/addToCart') && method === 'POST':
                        return addToCart();
                    case url.endsWith('/menu/removeFromCart') && method === 'POST':
                        return removeFromCart();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function login() {
                const { email, password } = body;
                const user = users.find(x => x.email === email && x.password === password);
                if (!user) return error('Email or password is incorrect');
                return ok({
                    id: user.id,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    token: 'fake-jwt-token'
                });
            }

            function register() {
                const user = body;
                user.role = userConstants.USER_ROLE;

                if (users.find(x => x.email === user.email)) {
                    return error(`User with email ${user.email} is already registered`);
                }

                // assign user id and a few other properties then save
                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            function updateUser() {
                if (!isLoggedIn()) return unauthorized();

                const {name, email, phone, address} = body;
                const replacedUser = users.find(user => user.id === idFromUrl());

                replacedUser.name = name;
                replacedUser.email = email;
                replacedUser.phone = phone;
                replacedUser.address = address;

                users = users.map(user => user.id === idFromUrl() ? replacedUser : user);
                //save changed values also after reloading page
                localStorage.setItem('user', JSON.stringify(body));
                localStorage.setItem('users', JSON.stringify(users));
                return ok(replacedUser);
            }

            function loginSN() {
                const { name, email } = body;
                let user = users.find(x => x.email === email);
                if (!user) {
                    user = {
                        role: userConstants.USER_ROLE,
                        name: name,
                        email: email,
                        phone: '',
                        token: 'fake-jwt-token'
                    }
                    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(users));
                }

                return ok({
                    id: user.id,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    token: 'fake-jwt-token'
                });
            }

            function createOrder() {
                if (!isLoggedIn()) return unauthorized();

                body.id = orders.length ? Math.max(...orders.map(x => x.id)) + 1 : 29421;
                const today = new Date()
                body.deliveryDate = today.toISOString().substring(0, 10);
                orders.push(body);
                localStorage.setItem('orders', JSON.stringify(orders));
                return ok(orders);
            }

            function assignOrder() {
                const assignedOrder = orders.find(x => x.id === idFromUrl());
                assignedOrder.status = orderConstants.IN_PROGRESS_STATUS;
                localStorage.setItem('orders', JSON.stringify(orders));
                return ok(orders);
            }

            function deliverOrder() {
                const deliveredOrder = orders.find(x => x.id === idFromUrl());
                deliveredOrder.status = orderConstants.DELIVERED_STATUS;
                localStorage.setItem('orders', JSON.stringify(orders));
                return ok(orders);
            }

            function addMenuItem() {
                const item = body;

                if (menuItems.find(x => x.name === item.name)) {
                    return error(`Dish ${item.name} is already in the menu`);
                }

                const itemId = menuItems.length ? Math.max(...menuItems.map(x => x.id)) + 1 : 1;
                item.id = itemId.toString();
                item.status = menuConstants.PUBLISHED_STATUS;
                menuItems.push(item);
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function editMenuItem() {
                const {id, name, description, category, ingredients, price, image} = body;
                const replacedItem = menuItems.find(item => item.id === id);

                replacedItem.name = name;
                replacedItem.description = description;
                replacedItem.category = category;
                replacedItem.ingredients = ingredients;
                replacedItem.price = price;
                replacedItem.image = image;

                menuItems = menuItems.map(item => item.id === idFromUrl() ? replacedItem : item);
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function preview() {
                return ok(body);
            }

            function reset() {
                return ok(menuItems);
            }

            function publishItem() {
                const menuItem = menuItems.find(item => item.id === body.id);
                menuItem.status = menuConstants.PUBLISHED_STATUS;
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function unpublishItem() {
                const menuItem = menuItems.find(item => item.id === body.id);
                menuItem.status = menuConstants.UNPUBLISHED_STATUS;
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function blockItem() {
                const menuItem = menuItems.find(item => item.id === body.id);
                menuItem.status = menuConstants.BLOCKED_STATUS;
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function unblockItem() {
                const menuItem = menuItems.find(item => item.id === body.id);
                menuItem.status = menuConstants.PUBLISHED_STATUS;
                localStorage.setItem('items', JSON.stringify(menuItems));
                return ok(menuItems);
            }

            function addToCart() {
                const {item, amount} = body;
                const cart = JSON.parse(localStorage.getItem('cart')) || {cartItems: [], total: 0};
                let alreadyInCart = false;

                if (cart.cartItems.length > 0) {
                    cart.cartItems = cart.cartItems.map((cartItem) => {
                        if (cartItem.id === item.id) {
                            cartItem.amount += amount;
                            alreadyInCart=true;
                        }
                        return cartItem;
                    });
                }

                if (!alreadyInCart) {
                    cart.cartItems.push({
                        id: item.id,
                        item: item,
                        price: item.price,
                        amount: amount
                    });
                }

                cart.total = updateTotal(cart.cartItems);
                localStorage.setItem('cart', JSON.stringify(cart));
                return ok(cart.cartItems);
            }

            function removeFromCart() {
                const {item, amount} = body;
                const cart = JSON.parse(localStorage.getItem('cart')) || {cartItems: [], total: 0};
                let index = -1;
                cart.cartItems.every((cartItem) => {
                    if(cartItem.id === item.id) {
                        index = cart.cartItems.indexOf(cartItem);
                    }
                    return index;
                });

                if(index !== -1) {
                    const foundItem = cart.cartItems[index];
                    if(foundItem.amount > amount) {
                        foundItem.amount -= amount;
                    } else {
                        cart.cartItems.splice(index, 1);
                    }
                }
                cart.total = updateTotal(cart.cartItems);
                localStorage.setItem('cart', JSON.stringify(cart));
                return ok(cart.cartItems);
            }

            // helper functions
            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }

            function updateTotal(items) {
                if (items.length > 0) {
                    let total = 0;
                    items.every((item)=>
                    {
                        total += (item.price*item.amount);
                        return total;
                    });
                    return total;
                } else {
                    return 0;
                }
            }
        });
    }
}
