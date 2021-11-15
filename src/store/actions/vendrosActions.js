// Async Action Types
export const API_GET_REQUEST = 'API_GET_REQUEST'; // Watcher Saga listens
export const API_GET_SUCCESS = 'API_GET_SUCCESS'; // Dispached by Worker Saga
export const API_GET_FAILURE = 'API_GET_FAILURE'; // Dispached by Worker Saga

/**
 * Generic HttpRequest Accion dispatcher
 */
export const httpRequest = (method, url) => {
    return {
        type: API_GET_REQUEST,
        payload: {
            request: {
                method,
                url,
            },
            okAction: API_GET_SUCCESS,
            failAction: API_GET_FAILURE,
        },
    };
};
