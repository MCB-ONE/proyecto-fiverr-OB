import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      addFilter: (state, action) => {
        return [action.payload];
      },
    },
});

const { reducer } = slice;
export const { addFilter, removeFilter, resetFilter } = slice.actions;
export default reducer;
