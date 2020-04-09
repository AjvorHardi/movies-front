<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Director</th>
                    <th scope="col">Duration</th>
                    <th scope="col">ReleaseDate</th>
                    <th scope="col">Genre</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <movie-row 
                    v-for="movie in moviesForCurrentPage" 
                    :key="movie.id" 
                    :movie="movie">
                </movie-row>
            </tbody>
        </table>
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
        <p>Broj selektovanih: {{ selected.length }} </p>
        
        <button @click="selectAllMovies">Select All</button>
        <button @click="deselectAllMovies">Deselect All</button>
        
        <button @click="sort({type: 'title', isAsc: true})">Sort by Name asc</button>
        <button @click="sort({type: 'title', isAsc: false})">Sort by Name desc</button>
        <button @click="sort({type: 'duration', isAsc: true})">Sort by Duration asc</button>
        <button @click="sort({type: 'duration', isAsc: false})">Sort by Duration desc</button>
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
            ...mapGetters(['moviesForCurrentPage', 'searchedMovies', 'searchTerm', 'currentPage', 'selected'])
        },
        methods: {
            ...mapActions(['getMovies', 'prevPage', 'nextPage', 'setSelectedAllMovies', 'setUnselectedAllMovies', 'sortMovies']),
            paginatePrev() {
                this.prevPage();
            },
            paginateNext() {
                this.nextPage();
            },
            selectAllMovies() {
                this.setSelectedAllMovies();
            },
            deselectAllMovies() {
                this.setUnselectedAllMovies();
            },
            sort(sortConfig) {
                this.sortMovies(sortConfig);
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
        }
        
    }
</script>

<style lang="scss" scoped>

</style>