/** Vendors Action types */
export const API_GET_REQUEST = 'API_GET_REQUEST';
export const API_GET_SUCCESS = 'API_GET_SUCCESS';
export const API_GET_FAILURE = 'API_GET_FAILURE';

export const getAllVendors = () => ({
    type: API_GET_REQUEST,
});
export const setAllVendorsOk = (data) => ({
    type: API_GET_SUCCESS,
    payload: data,
});
export const setAllVendorsfailure = (error) => ({
    type: API_GET_REQUEST,
    payload: error,
});

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
