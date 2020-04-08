<template>
    <tr>
        <td>{{movie.id}}</td>
        <td>{{movie.title}}</td>
        <td>{{movie.director}}</td>
        <td>{{movie.releaseDate}}</td>
        <td>{{movie.duration}}</td>


    </tr>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>