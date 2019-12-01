import tron from 'reactotron-react-native';
import axios from 'axios';

import { apiBase, basicAuth } from '../config/constants';

import storage from './storage';

const instance = axios.create({ baseURL: apiBase, timeout: 600000 })

export default {
  get: (url, data) => {
    return request({ method: 'get', url, data });
  },
  post: (url, data) => {
    return request({ method: 'post', url, data });
  },
  put: (url, data) => {
    return request({ method: 'put', url, data });
  },
  delete: (url, data) => {
    return request({ method: 'delete', url, data });
  },
  auth: (data) => {
    return auth(data);
  }
}

const request = async (reqConfig) => {
  // const token = await storage.getItem('@token');
  // const headers = { 'Authorization': `Bearer ${token.access_token}` };

  if (reqConfig.method === 'get') {
    return instance.request({
      method: reqConfig.method,
      url: reqConfig.url,
      params: reqConfig.data,
    }).then(res => res.data)
      .catch(err => handleError(err, reqConfig));
  } else {
    return instance.request({
      method: reqConfig.method,
      url: reqConfig.url,
      data: reqConfig.data,
    }).then(res => res.data)
      .catch(err => handleError(err))
  }
}

const auth = (data) =>
  axios.post(`${apiBase}/oauth/token?grant_type=password&username=${data.username}&password=${data.password}`
    , null, { headers: { 'Authorization': `${basicAuth}` } })
    .then(res => res.data).catch(err => handleError(err));

const refreshToken = async (reqConfig) => {
  const token = await storage.getItem('@token');

  axios.post(`${apiBase}/oauth/token?grant_type=refresh_token&refresh_token=${token.refresh_token}`,
    null, { headers: { 'Authorization': `${basicAuth}` } }).then(async res => {
      await storage.removeItem('@token');
      await storage.setItem('@token', res.data);
      return request(reqConfig);
    }).catch(err => handleError(err));
};

const handleError = (err, reqConfig) => {
  if (err.response.data && err.response.data.error == 'invalid_token') {
    return refreshToken(reqConfig);
  } else if (err.response.data) {
    throw err.response.data;
  } else if (err.response) {
    throw err.response;
  } else {
    throw err;
  }
}