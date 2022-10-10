import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workfloe.vercel.app/',
  headers: {
    common: {        // can be common or any other method
      'Access-Control-Allow-Origin': 'https://workfloe.vercel.app/'
    }
  }
  // baseURL:"http://localhost:5001/"
});

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;

export default axiosInstance;
