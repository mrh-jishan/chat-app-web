import axios from 'axios';


export const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:4000'

export const WS_HOST = process.env.REACT_APP_WS_HOST || 'ws://localhost:4000/cable'

export const onLogin = (user) => {
  return axios.post(`${API_HOST}/login`, { user })
    .then(res => res.data).catch(err => err.response)
};