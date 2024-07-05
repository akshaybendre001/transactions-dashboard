import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Update this to match your backend server address
});

export default api;