import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workfloe.vercel.app/',
  // baseURL:"http://localhost:5001/"
});

export default axiosInstance;
