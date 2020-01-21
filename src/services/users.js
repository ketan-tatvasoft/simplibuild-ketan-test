import { API } from './api';

// Users List
export async function getUsers(results = 50) {
  return new Promise((resolve, reject) => {
    return API('GET', 'api', {params: { results: results}}).then(response => {      
      response.status === 200 ? resolve(response.data) : reject(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
