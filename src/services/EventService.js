import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // base url
  withCredentials: false,
  headers: { // for auth and config
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`);
  },
};
