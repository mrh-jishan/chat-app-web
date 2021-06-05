import axios from 'axios';

const request = axios.create();
const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:4000'
// const WS_HOST = process.env.REACT_APP_WS_HOST || 'ws://localhost:4000/cable'

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export const onLogin = (user) => {
  return axios.post(`${API_HOST}/login`, { user })
    .then(res => res.data)
    .catch(err => err.response)
};

export const onChatroom = (user) => {
  return request.get(`${API_HOST}/chatrooms`)
    .then(res => res.data)
    .catch(err => err.response)
};

export const onCreateChatroom = (topic) => {
  return request.post(`${API_HOST}/chatrooms`, { chatroom: topic })
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
}
