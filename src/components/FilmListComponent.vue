<script>
export default {
    props: {
        movies: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<template>
    <div v-if="movies.length > 0">
        <div v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_avarage }}</p>
        </div>
    </div>
    <div v-else>
        <p>niente</p>
    </div>
</template>