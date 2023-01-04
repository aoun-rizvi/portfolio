import axios from 'axios';

const BACKEND_API = axios.create({
  baseURL: 'http://localhost:3000/api/'
});
const API = axios.create({
  baseURL: '/api/'
});
const API_CANCEL = axios.CancelToken.source();


/***************************
******** API CALLs *********
****************************/

// cancel api call
const cancelApi = () => {
  API_CANCEL.cancel("Cancelling in cleanup");
};


module.exports = {
  email: {
    send: payload => API.post(`email/send`, payload)
  },
  cancelApi
}
