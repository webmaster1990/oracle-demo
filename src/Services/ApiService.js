import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://129.213.127.79:14000/iam/governance/selfservice/api/v1/',
});

export class ApiService {
  async getData(url, headers, cancelToken) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'auth': {
          username: 'xelsysadm',
          password: 'MonDay2019##'
        },
        'authorization': 'Basic ' + btoa('xelsysadm:MonDay2019##'),
        ...(headers || {}),
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
        referrer: 'no-referrer',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'auth': {
          username: 'xelsysadm',
          password: 'MonDay2019##'
        },
        'authorization': 'Basic ' + btoa('xelsysadm:MonDay2019##'),
        ...(headers || {})
      }
    };
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  }
  
  async getPendingReqests() {
    return this.getData('requests?requestStatus=pending');
  }

}
