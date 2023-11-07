import axiosClient from '../../global/axiosClient';
import cinemaApi from '../managementCinema/cinemaApi';
import seatChartApi from '../managementSeat/seatChart';
import formatMovieApi from './formatMovieApi';

const url = 'showtime';

const showtimeApi = {
    getActorId: async (actorId) => {
        return axiosClient.get(url + '/' + actorId);
    },

    getAll() {
        return axiosClient.get(url + '/get/all');
    },
    getShowtime: async (page, limit) => {
        const params = {
            page: page,
            limit: limit,
        };
        const res = await axiosClient.get(url, { params });
        return res.data;
    },
    getShowtimeByEndtime(endTime) {
        return axiosClient.get(url + '/get-showtime-by-endtime/' + endTime);
    },
    //lấy dữ liệu của showtime theo endtime, movie, cinema, format
    getShowtimesByCCXAndMovieAndFormatAndEndtime(cinemaID, movieId, formatId, endTime) {
        return axiosClient.get(url + '/get/showtime-by-endTime-movie-format-date/' + cinemaID + '/' + movieId + '/' + formatId + '/' + endTime);
    },
    post: async (data, cinemaId, formatId, seatChartId) => {
        const [cinema, formatMovie, seatChart] = await Promise.all([
            cinemaApi.getId(cinemaId),
            formatMovieApi.getId(formatId),
            seatChartApi.getId(seatChartId),
        ]);
        const values = { ...data, cinema: cinema.data, formatMovie: formatMovie.data, seatChart: seatChart.data };
        return axiosClient.post(url, values);
    },
    put: async (id, data, cinemaId, formatId, seatChartId) => {
           const [cinema, formatMovie, seatChart] = await Promise.all([
               cinemaApi.getId(cinemaId),
               formatMovieApi.getId(formatId),
               seatChartApi.getId(seatChartId),
           ]);
           const values = { ...data, cinema: cinema.data, formatMovie: formatMovie.data, seatChart: seatChart.data };
        return axiosClient.put(url + '/' + id, values);
    },
    delete: async (actorId) => {
        return axiosClient.delete(url + '/' + actorId);
    },
};

export default showtimeApi;
