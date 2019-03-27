import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://129.213.127.79:14000/iam/governance' : '/iam/governance',
});

export class ApiService {
  
  getAuthToken = () => localStorage.getItem('access_token');
  
  async getData(url, headers, cancelToken) {
    const config = {
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${this.getAuthToken()}`,
        ...(headers || {})
      }
    };
    if (cancelToken && cancelToken.token) {
      config.cancelToken = cancelToken.token;
    }
    const response = await axiosInstance.get(url, config);
    return response.data;
  }
  
  async postMethod(url, data, headers) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${this.getAuthToken()}`,
        ...(headers || {})
      }
    };
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  }
  
  async login({username, password}) {
    const config = {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'X-REQUESTED-BY': '12345',
        'authorization': `Basic ${btoa(`${username}:${password}`)}`,
      }
    };
    const response = await axiosInstance.post('/token/api/v1/tokens', {}, config);
    return response.data;
  }
  
  async getPendingReqests() {
    return this.getData('selfservice/api/v1/certifications');
  }

}
