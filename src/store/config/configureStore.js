import { configureStore } from '@reduxjs/toolkit';
// Reducers
import services from '../slices/services/index';
/** Store configuration, combine all app states */
export default configureStore({
    // Add all reducers = rootreducer
    reducer: {
        services,
    },
});
