import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/MovieService'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        movies: []
    },
    getters: {
        movies: state => state.movies
    },
    actions: {
        async getMovies({commit}) {
            console.log("usao u akciju");
            const movies = await moviesService.getAll();
            commit('setMovies', movies);
        }
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        }
    }
})