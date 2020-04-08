<template>
    <div>
        <ul>
            <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"></movie-row>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import MovieRow from './MovieRow';

    export default {
        name: 'AppMovies',
        components: {
            MovieRow
        },
        computed: {
            ...mapGetters(['movies'])
        },
        methods: {
            ...mapActions(['getMovies'])
        },

        beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
        }
        
    }
</script>

<style lang="scss" scoped>

</style>