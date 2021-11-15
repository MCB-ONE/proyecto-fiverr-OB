import axios from 'axios';

// Default config for axios
// TODO change config to our API
export default axios.create(
    {
       baseURL: 'https://reqres.in/api/',
       responseType: 'json',
       timeout: 8000,
    },
);
