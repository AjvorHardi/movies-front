import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../components/AppMovies'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        name: 'home' ,
        redirect: '/movies'
    },
    {
        path: '/movies', 
        name: 'movies',
        component: AppMovies
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;