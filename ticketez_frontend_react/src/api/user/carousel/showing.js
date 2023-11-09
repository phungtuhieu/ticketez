import axiosClient from '~/api/global/axiosClient';

const urlMovie = 'movie';
export const MovieShowingUserAPI = {
    getMovieShowing: async () => {
        try {
            const result = await axiosClient.get(urlMovie + '/get/movie-by-showtime-showing');
            return result.data;
        } catch (error) {
            return error;
        }
    },
};
