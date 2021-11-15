import {
 applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import vendorsWatcherSaga from '../sagas/vendorsSaga';
import vendorsReducer from '../reducers/vendorsReducers';

/** Create our root reducr: to combine our reducers in one */
const rootReducer = combineReducers({
    // state name : reducer that will control it
    vendors: vendorsReducer,
    // ... add more states and reducers to include them in the store
});

/** Configure the store: Set our reducers and aply saga middleware */
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools(),
        ),
    );
    // We init the Watcher Saga
    sagaMiddleware.run(vendorsWatcherSaga);
    return store;
}
