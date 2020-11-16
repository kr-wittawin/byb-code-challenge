import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/user',
});

export const signup = payload => api.post(`/signup`, payload);

const routes = {
    signup
};

export default routes;