import axiosClient from '../../global/axiosClient';

const url = 'seatchart';

const seatChartApi = {
    getId: async (id) => {
        return axiosClient.get(url + '/' + id);
    },
    get: async () => {
        return axiosClient.get(url + '/getAll');
    },
    getStatusSeatChart: async () => {
        return axiosClient.get(url + '/getStatusSeatChart');
    },
    post: async (data) => {
        return axiosClient.post(url, data);
    },
    put: async (id, data) => {
        return axiosClient.put(url + '/' + id, data);
    },
    delete: async (id) => {
        return axiosClient.delete(url + '/' + id);
    },
};
export default seatChartApi;