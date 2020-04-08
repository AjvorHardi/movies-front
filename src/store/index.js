import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/MovieService'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        movies: [],
        searchTerm: "",
        currentPage: 1
    },
    getters: {
        movies: state => state.movies,
        searchedMovies: state => {
            const movies = state.movies;
            return (searchParam) => {
                return movies.filter(movie =>  movie.title.toLowerCase().includes(searchParam.toLowerCase()))
            }
        },
        searchTerm: state => state.searchTerm,
        moviesForCurrentPage: (state, {searchedMovies}) => {
            const movies = searchedMovies(state.searchTerm);
            console.log(movies);
            const startIndex = (state.currentPage - 1) * 5;
            const endIndex = startIndex + 5;
            return movies.slice(startIndex, endIndex)
        }

    },
    actions: {
        async getMovies({commit}) {
            console.log("usao u akciju");
            const movies = await moviesService.getAll();
            commit('setMovies', movies);
        },
        setSearchTerm({commit}, searchTerm) {
            commit('setSearchTerm', searchTerm);
        }
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;
            console.log(searchTerm);
        }
    }
})