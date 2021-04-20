import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_store/Store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureFakeBackend } from './_helpers/FakeBackend';


configureFakeBackend();
const rootElement = document.getElementById('root');

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    rootElement
);

