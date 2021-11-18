import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../../utils/config/axios.config';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesList: [],
    },
    reducers: {
        // Reducer actions
        setCategoriesList: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.categoriesList = action.payload;
        },
    },
});

// Exporting the reducer actions using destructuring
export const { setCategoriesList } = categoriesSlice.actions;

export default categoriesSlice.reducer;

// Async functions to the api requests
export const fetchAllcategories = () => (dispatch) => {
    // Return an async function
    axiosConfig.get('/categorias')
    .then((response) => {
        // After finish the request we dispatch reducer ACTION to change the service state
        dispatch(setCategoriesList(response.data));
    })
    .catch((error) => console.log(error));
};
