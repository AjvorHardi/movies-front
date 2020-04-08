<template>
    <div>
        <ul>
            <movie-row v-for="movie in moviesForCurrentPage" :key="movie.id" :movie="movie"></movie-row>
        </ul>
        <p v-if="!searchedMovies(searchTerm).length">Nema pronadjenih filmova</p>
        <ul class="pagination">
                <li class="page-item">
                    <button @click="paginatePrev" class="page-link">Previous</button>
                </li>
                <li class="page-item active">
                    <p class="page-link" >{{currentPage}}</p>
                </li>
                <li class="page-item">
                    <button @click="paginateNext" class="page-link">Next</button>
                </li>
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
            ...mapGetters(['moviesForCurrentPage', 'searchedMovies', 'searchTerm', 'currentPage'])
        },
        methods: {
            ...mapActions(['getMovies', 'prevPage', 'nextPage']),
            paginatePrev() {
                this.prevPage();
            },
            paginateNext() {
                this.nextPage();
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
        }
        
    }
</script>

<style lang="scss" scoped>

</style>