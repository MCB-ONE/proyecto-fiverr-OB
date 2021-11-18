import { configureStore } from '@reduxjs/toolkit';
// Reducers
import services from '../slices/services/index';
import categories from '../slices/categories';
import filters from '../slices/filters';
/** Store configuration, combine all app states */
export default configureStore({
    // Add all reducers = rootreducer
    reducer: {
        services,
        categories,
        filters,
    },
});
