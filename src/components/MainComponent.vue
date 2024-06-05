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
    }
};
</script>

<template>
    <div>
        <FilmListComponent :movies="movies" />
    </div>
</template>