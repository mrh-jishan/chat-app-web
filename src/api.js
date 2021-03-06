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
    .catch(err => err.response.data || err.response)
};

export const onRegister = (user) => {
  return axios.post(`${API_HOST}/signup`, { user })
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
}

export const onGetUser = () => {
  return request.get(`${API_HOST}/user`)
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
};

export const onChatroom = () => {
  return request.get(`${API_HOST}/chatrooms`)
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
};

export const onCreateChatroom = (topic) => {
  return request.post(`${API_HOST}/chatrooms`, { chatroom: topic })
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
}

export const onLoadMessage = (slug) => {
  return request.get(`${API_HOST}/chatrooms/${slug}/messages`)
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
}

export const onCreateMessage = (slug, content) => {
  return request.post(`${API_HOST}/chatrooms/${slug}/messages`,
    {
      message: { content }
    })
    .then(res => res.data)
    .catch(err => err.response.data || err.response)
}