import axios from 'axios';
import { API_BASE_URL } from 'config/constants';

const auth_token = localStorage.user_token;

export const getDateRange = (payload, user_token) => {
  return axios
    .post(`${API_BASE_URL}getDateRange`, payload, {
      headers: {
        'x-auth-token': user_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const getBarData = (payload) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': auth_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const getTableData = (payload) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': auth_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const getPieData = (payload) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': auth_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};
