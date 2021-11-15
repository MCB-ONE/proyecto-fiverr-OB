import axios from 'axios';

/**
 * Simple async function to do a get http request
 * @param {object} especific http request
 * @returns {promise} promise from axios request
 */
// Todo change request's config to our API
 export default function getAllVendorsRequest() {
    return axios.request({
        method: 'get',
        url: 'https://reqres.in/api/users',
    });
}
