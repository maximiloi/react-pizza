import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // указываем реакту что работаем с редаксом, используя PROVIDER

import store from './redux/store'; // подключаем файл из другой дирктории, что бы тут не создавть не разбериху

import './scss/app.scss';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);