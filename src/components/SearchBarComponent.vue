<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        searchMovies() {
            this.$emit('search', this.searchQuery);
        }
    }
};
</script>

<template>
    <input v-model="searchQuery" type="text" placeholder="Inserisci il nome del film">
    <button @click="searchMovies">Cerca</button>
</template>