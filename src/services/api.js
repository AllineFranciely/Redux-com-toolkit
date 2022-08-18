import axios from 'axios';

const api = axios.create({
  baseURL: 'https://toolkit-cat-back-2930.herokuapp.com/',
});

export default api;