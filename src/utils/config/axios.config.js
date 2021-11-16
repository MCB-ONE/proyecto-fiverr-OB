import axios from 'axios';

// Default config for axios
// TODO change config to our API
export default axios.create(
    {
       baseURL: 'https://proyecto-fiverr.herokuapp.com/api/',
       responseType: 'json',
       timeout: 8000,
    },
);
