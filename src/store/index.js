import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/MovieService'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        movies: [],
        searchTerm: "",
        currentPage: 1,
        selected: []
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
        currentPage: state => state.currentPage,
        selected: state => state.selected,
        moviesForCurrentPage: (state, {searchedMovies}) => {
            const movies = searchedMovies(state.searchTerm);
            const startIndex = (state.currentPage - 1) * 5;
            const endIndex = startIndex + 5;
            return movies.slice(startIndex, endIndex)
        }

    },
    actions: {
        async getMovies({commit}) {
            const movies = await moviesService.getAll();
            commit('setMovies', movies);
        },
        setSearchTerm({commit}, searchTerm) {
            commit('setSearchTerm', searchTerm);
        },
        nextPage({commit}) {
            commit('nextPage')
        },
        prevPage({commit}) {
            commit('prevPage')
        },
        setSelectedMovie({commit}, movieToSelect) {
            commit('setSelectedMovie', movieToSelect)
        },
        setSelectedAllMovies({commit}) {
            commit('setSelectedAllMovies')
        },
        setUnselectedAllMovies({commit}) {
            commit('setUnselectedAllMovies')
        }
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;
            console.log(searchTerm);
        },
        nextPage(state) {
            state.currentPage++
        },
        prevPage(state) {
            state.currentPage--
        },
        setSelectedMovie(state, movieToSelect) {
            if(state.selected.indexOf(movieToSelect) === -1) {
                state.selected.push(movieToSelect);
            }
        },
        setSelectedAllMovies(state) {
            state.selected = state.movies;
        },
        setUnselectedAllMovies(state) {
            state.selected = [];
        }
    }
})