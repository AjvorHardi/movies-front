<template>
    <div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AppMovies',
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