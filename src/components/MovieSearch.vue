<template>
    <div>
        <input @input="onSearchChange" v-model="searchParam" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
    </div>
</template>

<script>
    
    import { mapActions } from 'vuex';
    
    export default {
        data() {
            return {
                searchParam: ""
            }
        },
        methods: {
            ...mapActions(['setSearchTerm']),
            onSearchChange(event) {
                this.setSearchTerm(event.target.value);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>