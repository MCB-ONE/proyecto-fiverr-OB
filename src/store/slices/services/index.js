import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../../utils/config/axios.config';

export const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        serviceList: [],
    },
    reducers: {
        // Reducer actions
        setServices: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.serviceList = action.payload;
        },
    },
});

// Exporting the reducer actions using destructuring
export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;

// Async functions to the api requests
export const fetchAllServices = () => (dispatch) => {
    // Return an async function
    axiosConfig.get('/trabajos')
    .then((response) => {
        // After finish the request we dispatch reducer ACTION to change the service state
        dispatch(setServices(response.data));
        console.log(response.data);
    })
    .catch((error) => console.log(error));
};
