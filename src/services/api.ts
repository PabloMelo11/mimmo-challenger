import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://virtserver.swaggerhub.com/mimoo-tech/frontend-challenge-api/1.0.0',
});

export default api;
