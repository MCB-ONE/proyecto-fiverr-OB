import { call, put } from 'redux-saga/effects';
import getAllVendorsRequest from '../requests/vendorsRequest';

export default function* handleGetAllVendors(action) {
    try {
        const response = yield call(getAllVendorsRequest);
        const { data } = response;
        console.log(data);
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                data,
            },
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error,
            },
        });
    }
}
