import axios from 'axios';

// Default config for axios
export default axios.create(
    {
       baseURL: 'https://backend-proyect-alpha.herokuapp.com/api',
       responseType: 'json',
       timeout: 8000,
    },
);
