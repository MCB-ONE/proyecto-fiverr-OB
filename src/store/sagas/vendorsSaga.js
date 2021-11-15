import { takeLatest } from 'redux-saga/effects';
import { API_GET_REQUEST } from '../actions/vendrosActions';
import handleGetAllVendors from './handlers/vendrosHadler';

/** Export watcher:  the gerator function */
export default function* vendorsWatcherSaga() {
    // Listens the action and starts a Worker Saga
    yield takeLatest(API_GET_REQUEST, handleGetAllVendors);
}
