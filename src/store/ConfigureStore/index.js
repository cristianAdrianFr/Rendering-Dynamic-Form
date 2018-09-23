import { createStore, applyMiddleware, compose } from 'redux';

import loggerMiddleware from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import isDev from 'isdev';

import RootReducer from '../../reducers';

import rootSaga from '../../sagas';

let configureStore;

//If the app is running in dev, add in redux dev tools.
if (isDev) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    configureStore = initialState => {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(
            RootReducer,
            initialState,
            composeEnhancers(
                applyMiddleware(
                    loggerMiddleware,
                    sagaMiddleware
                )
            )
        );

        sagaMiddleware.run(rootSaga);

        return store;
    };
} else {
    configureStore = initialState => {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(
            RootReducer,
            initialState,
            applyMiddleware(sagaMiddleware)
        );

        sagaMiddleware.run(rootSaga);

        return store;
    };
}

export default configureStore;