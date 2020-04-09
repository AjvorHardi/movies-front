<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Movies</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
       
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        </ul>
        <movie-search></movie-search>
    </div>
</nav>
</template>

<script>
    import MovieSearch from './MovieSearch';

    export default {
        components: {
            MovieSearch
        },
    }
</script>

<style lang="scss" scoped>

</style>