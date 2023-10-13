import axios from 'axios';
import funcUtils from '~/utils/funcUtils';
import httpStatus from './httpStatus';

const baseUrl = process.env.REACT_APP_TICKET_PRODUCTION_REST_API;
// setup axios client

const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case httpStatus.INTERNAL_SERVER_ERROR:
                    funcUtils.notify('Lỗi kết nối server', 'error');
                    break;
                case 401:
                    funcUtils.notify(error.response.data.message, 'error');
                    break;
                case httpStatus.CONFLICT:
                        funcUtils.notify(error.response.data, 'error');
                        break;
                default:
                    funcUtils.notify(error.response.data.message, 'error');
                    break;
            }
        }
        return Promise.reject(error);
    },
);

// axiosClient.interceptors.request.use(
//   (config) => {
//     console.log('Interceptor is running');
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//       console.log('yes');
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default axiosClient;