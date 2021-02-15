import { createStore } from 'redux';  // создаем хранилище для данных

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // строка для REDUX_DEVTOOLS
);

window.store = store;

export default store;