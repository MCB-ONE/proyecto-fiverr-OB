import { takeLatest } from 'redux-saga/effects';
import { API_GET_REQUEST } from '../reducers/vendorsReducers';
import handleGetAllVendors from './handlers/vendorsHandler';

/** Export watcher:  the gerator function */
export default function* vendorsWatcherSaga() {
    // Listens the action and starts a Worker Saga
    yield takeLatest(API_GET_REQUEST, handleGetAllVendors);
}
