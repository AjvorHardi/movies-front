import HTTP from './BaseService';

class MoviesService {
    async getAll() {
        const response = await HTTP.get('/movies');
        return response.data;
    }
}

const moviesService = new MoviesService();

export default moviesService;