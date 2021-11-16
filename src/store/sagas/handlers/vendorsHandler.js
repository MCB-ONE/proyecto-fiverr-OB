import { call, put } from 'redux-saga/effects';
import { setAllVendorsOk } from '../../reducers/vendorsReducers';
import getAllVendorsRequest from '../requests/vendorsRequest';

export default function* handleGetAllVendors(action) {
    try {
        const response = yield call(getAllVendorsRequest);
        const { data } = response;
        console.log(data);
        yield put(setAllVendorsOk(data));
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
