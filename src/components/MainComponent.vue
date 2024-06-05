<script>
import FilmListComponent from './FilmListComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        FilmListComponent
    },

    props: {
        movies: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log('Prop movies:', this.movies);
    }
};
</script>

<template>
    <div>
        <FilmListComponent :movies="movies" />
    </div>
</template>