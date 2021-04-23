import { userConstants } from '../_constants/UserConstants';
import {cartInitialState} from "../_reducers/CartReducer";
import {orderConstants} from "../_constants/OrderConstants";

let users = JSON.parse(localStorage.getItem('users')) ||
    [{ id: 1, role: userConstants.ADMIN_ROLE, name: 'admin', password: 'admin', email: 'admin@test.com' },
     { id: 2, role: userConstants.COURIER_ROLE, name: 'courier', password: 'test', email: 'courier@test.com' }
    ];

let orders = JSON.parse(localStorage.getItem('orders')) || [];

let cart = JSON.parse(localStorage.getItem('cart')) || {cartItems: [], total: 0};

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return login();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    case url.match(/\/users\/\d+$/) && method === 'PUT':
                        return updateUser();
                    case url.endsWith('/orders/create') && method === 'POST':
                        return createOrder();
                    case url.match(/\/orders\/assign\/\d+$/) && method === 'GET':
                        return assignOrder();
                    case url.match(/\/orders\/deliver\/\d+$/) && method === 'GET':
                        return deliverOrder();
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
                    cart: cartInitialState,
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

            function getUsers() {
                if (!isLoggedIn()) return unauthorized();
                return ok(users);
            }

            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();

                users = users.filter(x => x.id !== idFromUrl());
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

            function createOrder() {
                if (!isLoggedIn()) return unauthorized();

                body.id = orders.length ? Math.max(...orders.map(x => x.id)) + 1 : 29421;
                const today = new Date()
                body.deliveryDate = today.toISOString().substring(0, 10);
                orders.push(body);
                localStorage.setItem('orders', JSON.stringify(orders));
                localStorage.removeItem('cart');
                return ok();
            }

            function assignOrder() {
                const assignedOrder = orders.find(x => x.id === idFromUrl());
                assignedOrder.status = orderConstants.IN_PROGRESS_STATUS;
                localStorage.setItem('orders', JSON.stringify(orders));
                return ok();
            }

            function deliverOrder() {
                const deliveredOrder = orders.find(x => x.id === idFromUrl());
                deliveredOrder.status = orderConstants.DELIVERED_STATUS;
                localStorage.setItem('orders', JSON.stringify(orders));
                return ok();
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
        });
    }
}
