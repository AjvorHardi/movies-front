<template>
    <tr :class="klasa">
        <td>{{movie.id}}</td>
        <td>{{movie.title}}</td>
        <td>{{movie.director}}</td>
        <td>{{movie.releaseDate}}</td>
        <td>{{movie.duration}}</td>

        <button @click="selectMovie">Select</button>
    </tr>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                klasa: ""
            }
        },
        props: {
            movie: {
                type: Object
            },
            disabled: {
                type: Boolean
            }
        },
        methods: {
            ...mapActions(['setSelectedMovie']),
            selectMovie() {
                this.setSelectedMovie(this.movie);
                this.klasa = "bg-warning";
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>