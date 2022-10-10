import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workfloe.vercel.app/',
});

export default axiosInstance;
