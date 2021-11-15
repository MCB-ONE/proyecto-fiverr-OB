import { API_GET_REQUEST, API_GET_SUCCESS, API_GET_FAILURE } from '../actions/vendrosActions';
/** Vendors initial state */
const initialState = {
    vendors: null,
    fetching: false,
    error: null,
};

const vendorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_GET_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
            };
        case API_GET_SUCCESS:
            return {
                ...state,
                vendors: action.payload.data,
                fetching: false,
                error: null,
            };
        case API_GET_FAILURE:
            return {
                ...state,
                vendors: null,
                fetching: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default vendorsReducer;
