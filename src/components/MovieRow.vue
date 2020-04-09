<template>
    <tr :class="classSelected">
        <td>{{movie.id}}</td>
        <td>{{movie.title}}</td>
        <td>{{movie.director}}</td>
        <td>{{movie.duration}}</td>
        <td>{{movie.releaseDate}}</td>

        <button :disabled="isSelected" @click="selectMovie">Select</button>
    </tr>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
       
        computed: {
            ...mapGetters(['selected']),
            isSelected() {
                return this.selected.indexOf(this.movie) !== -1
            },
            classSelected() {
                if(this.isSelected) {
                    return "bg-warning"
                } else {
                    return ""
                }
            }
        },
        props: {
            movie: {
                type: Object
            },
            disabled: {
                type: Boolean
            },
            klasa: {
                type: String
            }
        },
        methods: {
            ...mapActions(['setSelectedMovie']),
            selectMovie() {
                this.setSelectedMovie(this.movie);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>