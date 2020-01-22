import axios from 'axios';
import config from '../config';

const API = (method, endPoint, data) => {
  return axios({
    method: method,
    url: config.BASE_API_DOMAIN + endPoint,
    headers: {},
    data: data,
    params: data && data.params ? data.params : null
  })
    .then((response) => {
      return response
    })
    .catch(error => {
      if (!error.response) {        
        return {
          data: {
            success: false,
            error: 'Network Error ! Please try after sometime.'
          }
        }
      } else {
        return error.response
      }
    });
}

export default API;
