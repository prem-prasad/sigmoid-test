import axios from 'axios';
import { API_BASE_URL } from 'config/constants';

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

export const getBarData = (payload, user_token) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': user_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const getTableData = (payload, user_token) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': user_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const getPieData = (payload, user_token) => {
  return axios
    .post(`${API_BASE_URL}getData`, payload, {
      headers: {
        'x-auth-token': user_token
      }
    })
    .then((response) => response)
    .catch((err) => err.response);
};
