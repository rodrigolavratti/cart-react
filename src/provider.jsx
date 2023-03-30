import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/b67e0922d66b4177bf1c5775c80284f8/',
    timeout: 4000
});