import { userConstants } from '../_constants/UserConstants';

let users = JSON.parse(localStorage.getItem('users')) ||
    [{ id: 1, role: userConstants.ADMIN_ROLE, name: 'admin', password: 'admin', email: 'admin@test.com' },
     { id: 2, role: userConstants.COURIER_ROLE, name: 'courier_1', password: 'test', email: 'courier_1@test.com' },
     { id: 3, role: userConstants.COURIER_ROLE, name: 'courier_2', password: 'test', email: 'courier_2@test.com' }
    ];

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
                        return authenticate();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
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
